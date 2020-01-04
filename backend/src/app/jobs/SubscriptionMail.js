import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import Mail from "../../lib/Mail";

class SubscriptionMail {
  get key() {
    return "SubscriptionMail";
  }

  async handle({ data }) {
    const { hackathon, user } = data;
    console.log(hackathon);

    await Mail.sendMail({
      to: `${hackathon.organizer.name} <${hackathon.organizer.email}>`,
      subject: "Nova inscrição.",
      template: "subscription",
      context: {
        organizer: hackathon.organizer.name,
        user: user.name,
        date: format(
          parseISO(hackathon.date),
          "'dia' dd 'de' MMM 'às' HH:mm'h' ",
          { locale: ptBR }
        )
      }
    });
  }
}

export default new SubscriptionMail();
