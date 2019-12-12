import { isBefore, isEqual } from "date-fns";

import User from "../models/User";
import Hackathon from "../models/Hackathon";

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

    const timeConflict = user.hackathons.find(hack => {
      return isEqual(hack.date, hackathon.date);
    });

    if (timeConflict)
      return res.status(401).json({
        error: "You are already subscribed to another Hackathon at this time"
      });

    await user.addHackathon(hackathon);

    return res.json(hackathon);
  }
}

export default new SubscriptionController();
