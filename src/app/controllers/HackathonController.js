import * as Yup from 'yup';
import { startOfHour, isBefore, parseISO, format, subHours } from 'date-fns';

import Hackathon from '../models/Hackathon';
import File from '../models/File';
import User from '../models/User';

class HackathonController {
    
    /*
    * Create a Hackathon
    */
    
    async store(req, res) {

        const { title, description, date, banner_id, awards } = req.body;

        /*
        * Check if body is valid.
        */
        
        const schema = Yup.object().shape({
            title: Yup.string().required(),
            description: Yup.string().required(),
            date: Yup.date().required(),
            awards: Yup.number().required(),
            banner_id: Yup.number().required(),
        })


        if(!(await schema.isValid(req.body))) 
            return res.status(400).json({error: "Validation failed."});

        const hourStart = startOfHour(parseISO(date));    

        /*
        * Check date is valid.
        */
        
        if(isBefore(hourStart, new Date()))
            return res.status(400).json({error: "Past date are not permited."});

        
        /*
        * Create the Hackathon.
        */
        
        const response = await Hackathon.create({
            title,
            description,
            awards,
            date,
            banner_id,
            organizer_id: req.userId
        });

        const hackathon = await Hackathon.findByPk(response.id, {
            include:[
                {
                    model: File,
                    as: 'banner',
                    attributes: ['id', 'url', 'path']
                },
                {
                    model: User,
                    as: 'organizer',
                    attributes: ['id', 'name']
                }
            ]
        });

        return res.json({
            title,
            description,
            awards,
            date,
            banner: hackathon.banner,
            organizer: hackathon.organizer
        });


    };

    /*
    * Updated a Hackathon.
    */

    async update(req, res) {

        const { id } = req.params

        const schema = Yup.object().shape({
            title: Yup.string(),
            description: Yup.string(),
            date: Yup.date(),
            awards: Yup.number(),
            banner_id: Yup.number(),
        })

        if(!(await schema.isValid(req.body))) 
            return res.status(400).json({error: "Validation failed."});

        const hackathon = await Hackathon.findByPk(id);

        

        if(hackathon.organizer_id !== req.userId)
            return res.status(401).json({error: "You don't have permisson to edit this Hackathon"});
        

        if(isBefore(hackathon.date, new Date()))
            return res.status(401).json({error: "Hakcathons that have passed cannot be changed."});

        const { date } = req.body;    
            
        const editHour = startOfHour(parseISO(date)); 

        if(isBefore(editHour, new Date())) 
            return res.status(400).json({error: "Past date are not permited."});

        hackathon.update(req.body);

        await hackathon.save();

        return res.json(hackathon);
    };


};

export default new HackathonController();