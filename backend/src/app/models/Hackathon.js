import Sequelize, { Model } from "sequelize";
import { isBefore, subHours } from "date-fns";

class Hackathon extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        address: Sequelize.STRING,
        date: Sequelize.DATE,
        awards: Sequelize.INTEGER,
        past: {
          type: Sequelize.VIRTUAL,
          get() {
            return isBefore(this.date, new Date());
          }
        },
        cancelable: {
          type: Sequelize.VIRTUAL,
          get() {
            return isBefore(new Date(), subHours(this.date, 1));
          }
        }
      },
      {
        sequelize
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: "banner_id", as: "banner" });
    this.belongsTo(models.User, {
      foreignKey: "organizer_id",
      as: "organizer"
    });
    this.belongsToMany(models.User, {
      foreignKey: "hackathon_id",
      through: "user_hackathons",
      as: "users"
    });
  }
}

export default Hackathon;
