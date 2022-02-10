const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Reply extends Model {}

Reply.init(
  {
    author: {
      type: DataTypes.STRING,
      allowNull: false, // future anon posting? true?
    },
    date: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Reply;
