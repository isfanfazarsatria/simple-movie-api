'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie_keyword extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Movie_keyword.init({
    movie_id: DataTypes.INTEGER,
    keyword_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie_keyword',
  });
  return Movie_keyword;
};