import * as Yup from 'yup'
import { startOfHour, isBefore, parseISO, format, subHours } from 'date-fns'

import Hackathon from '../models/Hackathon'

class HackathonController {
    
    async store(req, res) {

        const { title, description, date, banner_id, awards } = req.body

        const schema = Yup.object().shape({
            title: Yup.string().required(),
            description: Yup.string().required(),
            date: Yup.date().required(),
            awards: Yup.number().required(),
            banner_id: Yup.number().required(),
        })

        if(!(await schema.isValid(req.body))) 
            return res.status(400).json({error: "Validation failed."})

        const hourStart = startOfHour(parseISO(date))    

        if(isBefore(hourStart, new Date()))
            return res.status(400).json({error: "Past date are not permited."})

        const response = await Hackathon.create({
            title,
            description,
            awards,
            date,
            banner_id,
            organizer_id: req.userId
        })

        return res.json()


    }

};

export default new HackathonController();