"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("users", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            username: {
                type: Sequelize.STRING,
            },
            password: {
                type: Sequelize.STRING,
            },
            fullname: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.STRING,
            },
            birthdate: {
                type: Sequelize.DATE,
            },
            phone_number: {
                type: Sequelize.STRING,
            },
            address: {
                type: Sequelize.STRING,
            },
            gender: {
                type: Sequelize.STRING,
            },
            profile_picture: {
                type: Sequelize.STRING,
            },
            refferal_code: {
                type: Sequelize.STRING,
            },
            balance: {
                type: Sequelize.INTEGER,
            },
            point: {
                type: Sequelize.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            deletedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("users");
    },
};
