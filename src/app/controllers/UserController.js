import * as Yup from "yup";

import User from "../models/User";

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(8)
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: "Validation failed." });

    const userExists = await User.findOne({
      where: {
        email: req.body.email
      }
    });

    if (userExists)
      return res.status(400).json({ error: "User already exists." });

    const { id, name, email } = await User.create(req.body);

    return res.json({
      id,
      name,
      email
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string(),
      password: Yup.string()
        .min(8)
        .when("oldPassword", (oldPassword, field) => {
          return oldPassword ? field.required() : field;
        }),
      confirmPassword: Yup.string().when("password", (password, field) => {
        return password ? field.required().oneOf([Yup.ref("password")]) : field;
      })
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: "Validation failed." });

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists)
        return res.status(400).json({ error: "User already exists." });
    }
    if (oldPassword && !(await user.checkPassword(oldPassword)))
      return res.status(400).json({ error: "Password not macth." });

    const { id, name } = await user.update(req.body);

    return res.json({
      id,
      name,
      email
    });
  }
}

export default new UserController();
