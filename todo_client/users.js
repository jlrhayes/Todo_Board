const sequelize = require('./db.js');
const {DataTypes, Model } = require("sequelize");

class User extends Model {}

User.init(
    {
        name: DataTypes.STRING,
        passwordHash: DataTypes.STRING,
        email: DataTypes.STRING,
        avatarUrl: DataTypes.STRING,
        isAdmin: DataTypes.BOOLEAN,
    },
    {
        sequelize,
        modelName: 'users',
        timestamps: false,
    }
);

module.exports = User;