import mongoose, { Schema } from 'mongoose';

const CommentSchema = new Schema({
    name       : String,
    content    : String
}, {timestamps : true});

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;