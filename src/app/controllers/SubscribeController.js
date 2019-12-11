import User from '../models/User';
import Hackathon from '../models/Hackathon';

class SubscribeController {
    async store(req, res) {
        const { id } = req.params;

        const hackathon = await Hackathon.findByPk(id)
        
        const user = await User.findByPk(req.userId)

        await user.update(hackathon)

        return res.json(hackathon)

    }
};

export default new SubscribeController();