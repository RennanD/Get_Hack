module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("hackathons", "address", {
      type: Sequelize.STRING
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColoumn("hackathons", "address");
  }
};
