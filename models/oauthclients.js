'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OAuthClients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OAuthClients.hasOne(models.OAuthTokens, {
        foreignKey: 'clientId',
        as: 'token',
      });
    }
  };
  OAuthClients.init({
    clientId: DataTypes.STRING,
    clientSecret: DataTypes.STRING,
    redirectUris: DataTypes.STRING,
    grants: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'OAuthClients',
  });
  return OAuthClients;
};