const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


//CREATE OUR POST MODEL

class Post extends Model{}
//after the post.init function we defife the post schema
Post.init(
    {
        //sets id as primary key
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },//title is set to a string value that cant be empty 
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },//sets url to a string datatype, that cant be empty and checks to make sure it is a valid url
          post_url: {
              type: DataTypes.STRING,
              allowNull: false,
              validate: {
                  isURL: true
              }
          },//creates a user_id that references the User_Id to show who posted the content
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,

        freezeTableName: true,

        underscored: true,

        modelName: 'post'
    }
);

module.exports = Post;