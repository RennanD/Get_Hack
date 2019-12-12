import { isBefore, isEqual } from "date-fns";

import User from "../models/User";
import Hackathon from "../models/Hackathon";
import Queue from "../../lib/Queue";
import SubscriptionMail from "../jobs/SubscriptionMail";


class SubscriptionController {


  /**
   *  Subscribe in a Hackathon
   */

  async store(req, res) {
    const { id } = req.params;

    const hackathon = await Hackathon.findByPk(id, {
      include: [
        {
          association: "users"
        },
        {
          model: User,
          as: "organizer",
          attributes: ["id", "name", "email"]
        }
      ]
    });

    const user = await User.findByPk(req.userId, {
      include: { association: "hackathons" }
    });

    /**
     * Check if Hackaton exists
     */

    if (!hackathon)
      return res.status(400).json({ error: "Hackathon not found." });

    /**
     * Check if ures is not organizer
     */

    if (hackathon.organizer_id === req.userId)
      return res
        .status(401)
        .json({ error: "You can't subscribre in this Hackathon." });

    /**
     * Check if date is avaliable
     */

    if (isBefore(hackathon.date, new Date()))
      return res
        .status(401)
        .json({ error: "Hackathon is no longer available for subscription." });

    /**
     * Check if uses has subscribed in this Hackathon
     */

    const subscribed = hackathon.users.find(user => user.id === req.userId);

    if (subscribed)
      return res
        .status(400)
        .json({ error: "You are already subscribed to Hackathon" });

    /**
     * Check if the time matches another Hackahon.
     */
        
    const timeConflict = user.hackathons.find(hack => {
      return isEqual(hack.date, hackathon.date);
    });

    if (timeConflict)
      return res.status(401).json({
        error: "You are already subscribed to another Hackathon at this time"
      });

    await user.addHackathon(hackathon);

    await Queue.add(SubscriptionMail.key, {
      hackathon,
      user
    });

    const { title, desciption, awards, date } = hackathon

    return res.json({
      title,
      desciption,
      awards,
      date
    });
  }
}

export default new SubscriptionController();
