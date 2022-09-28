import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface ReviewInstance extends Model {
    id: number;
    name: string;
    product: string;
    like: boolean;
    text: string;
}

export const Review = sequelize.define<ReviewInstance>('Review', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    product: {
        type: DataTypes.STRING
    },
    like: {
        type: DataTypes.BOOLEAN
    },
    text: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'reviews',
    timestamps: false
});