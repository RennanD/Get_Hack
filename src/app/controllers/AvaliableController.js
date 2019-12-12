import { Op } from 'sequelize'

import { startOfDay, endOfDay, isAfter, parseISO, startOfHour } from 'date-fns'

import File from "../models/File";
import User from "../models/User";
import Hackathon from "../models/Hackathon";

class AvaliableController {

    async index(req, res){

        const { date ,page = 1 } = req.query;

        if(!date) return res.status(400).json({error: "Choose a date."});
        

        const hackathons = await Hackathon.findAll({
            where: {
              organizer_id: {
                [Op.ne]: req.userId
              },
              date: {
                  [Op.between]: [startOfDay(parseISO(date)), endOfDay(parseISO(date))]
              },
            },
            include: [
              {
                model: User,
                as: 'organizer',
                attributes: ['id','name']
              },
              {
                model: File,
                as: 'banner',
                attributes: ['id', 'path', 'url']
              }
            ],
            limit: 10,
            offset: (page - 1) *10,
            order: ['date']
        });


        const checkHackthons = hackathons.map(hack => {
            const hourStart = startOfHour(hack.date)
            if(isAfter(hourStart, new Date()))
                return hack
            
        })

        const avaliableHackthons = checkHackthons.find( h => h != null)
        
      
        return res.json(avaliableHackthons);
    }

}

export default new AvaliableController();