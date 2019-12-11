'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.addColumn('hackathons', 'awards', 
      { 
        type: Sequelize.INTEGER,
        default: null 
      });

  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.removeColoumn('hackathons', 'awards');

  }
};
