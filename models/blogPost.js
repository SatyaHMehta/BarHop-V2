const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class blogPost extends Model {}

blogPost.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      // unique: true,
      allowNull: false,
    },
    
    // likes: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: "post",
  }
);

module.exports = blogPost;
