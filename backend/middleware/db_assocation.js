const User = require("../models/user");
const Post = require("../models/post");
const Comment = require("../models/comment");

User.hasMany(Post);
Post.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);
