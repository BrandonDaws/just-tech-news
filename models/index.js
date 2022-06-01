const User = require('./user');
const Post = require('./post');

//create associations 
//User will have many Posts(hasMany), but each Post will only have one user(belongsTo). One to many Relationship.

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User,{
    foreignKey: 'user_id'
});

module.exports = { User, Post };