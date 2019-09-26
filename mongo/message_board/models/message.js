import mongoose, { Schema } from 'mongoose';

const MessageSchema = new Schema({
    name       : String,
    content    : String,
    comments   : [{ type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps : true});

const Message = mongoose.model('Message', MessageSchema);
module.exports = Message;