"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("your_table_name_here", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING, // Change to the appropriate data type
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING, // Change to the appropriate data type
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE, // Change to the appropriate data type (e.g., DATE, DATETIME, TIMESTAMP)
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE, // Change to the appropriate data type (e.g., DATE, DATETIME, TIMESTAMP)
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("your_table_name_here");
  },
};
