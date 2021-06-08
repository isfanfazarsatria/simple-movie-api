'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie_language extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Movie_language.init({
    movie_id: DataTypes.INTEGER,
    language_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie_language',
  });
  return Movie_language;
};