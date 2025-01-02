import {Model, Sequelize, DataTypes} from 'sequelize';

export default class Count extends Model {
    public id!: number;
    public count!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export const CountMap = (sequelize: Sequelize) => {
    Count.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        count: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'counts',
        sequelize,
        freezeTableName: true
    });
    Count.sync();
}