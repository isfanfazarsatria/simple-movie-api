'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert(
       'Movies',
       [
        {
          title: 'Warkop DKI', 
          overview: null,
          popularity: null,
          tagline:'Comedy',
          rating: 4, 
          createdAt: new Date(), 
          updatedAt: new Date() },
       ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Movies', null, {});
  }
};
