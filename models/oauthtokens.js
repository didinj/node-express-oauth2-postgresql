'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OAuthTokens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OAuthTokens.belongsTo(models.OAuthClients, {
        foreignKey: 'clientId',
        as: 'client',
      });
      OAuthTokens.belongsTo(models.OAuthUsers, {
        foreignKey: 'userId',
        as: 'user',
      });
    }
  };
  OAuthTokens.init({
    accessToken: DataTypes.STRING,
    accessTokenExpiresAt: DataTypes.DATE,
    refreshToken: DataTypes.STRING,
    refreshTokenExpiresAt: DataTypes.DATE,
    clientId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OAuthTokens',
  });
  return OAuthTokens;
};