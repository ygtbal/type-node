"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountMap = void 0;
const sequelize_1 = require("sequelize");
class Count extends sequelize_1.Model {
}
exports.default = Count;
const CountMap = (sequelize) => {
    Count.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        count: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'counts',
        sequelize,
        freezeTableName: true
    });
    Count.sync();
};
exports.CountMap = CountMap;
