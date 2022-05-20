const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class User extends Model {}

// define table columns and configuration
User.init(
  {
    // TABLE COLUMN DEFINITIONS GO HERE
    // DEFINES AN ID COLUMN
    id: {
        //USE THE SPECIAL SEQUALIZE DATATYPES OBJECT PROVIDE WHT TYPE OF DATA IT IS
        type: DataTypes.INTEGER,
        //SQL's NOT NULL VALUE
        allowNull: false,
        //  INSTRUCT THAT THIS IS THE PRIMARY KEY
        primaryKey: true, 
        //  TURN ON AUTO INCREMENT
        autoIncrement: true
    },
    //define a username column
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //define email column 
    email: {
        type: DataTypes.STRING,
        // no empty values
        allowNull: false,

        //cannot be any duplicate emails on file
        unique: true,

        //if allownull is false we can run the datat through validators 
        validate:{
          isEmail: true
        }
        },
        //define a password column
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate:{
            //password must eb atleast 4 chars
            len:[4]
          }
        }
    },

  {
    // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))

    // pass in our imported sequelize connection (the direct connection to our database)
    sequelize,

    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,

    // don't pluralize name of database table
    freezeTableName: true,

    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    
    // make it so our model name stays lowercase in the database
    modelName: 'user'
  }
);

module.exports = User;