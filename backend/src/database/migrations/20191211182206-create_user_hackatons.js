module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("user_hackathons", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: "users", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      },
      hackathon_id: {
        type: Sequelize.INTEGER,
        references: { model: "hackathons", key: "id" },
        onDelete: "SET NULL",
        onUpdate: "CASCADE"
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("user_hackathons");
  }
};
