import Sequelize, { Model } from "sequelize";

class Hackathon extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        date: Sequelize.DATE,
        awards: Sequelize.INTEGER
      },
      {
        sequelize
      }
    );


    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'banner_id', as: 'banner' })
    this.belongsTo(models.User, { foreignKey: 'organizer_id', as: 'organizer' })
    this.belongsToMany(models.User, {foreignKey: 'user_id', through: 'user_hackathons', as: 'users'})
  }

}

export default Hackathon;