const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  // Other fields
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
