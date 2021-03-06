import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    name: String,
    category: String,
    studentassigned: Array,
    mentorassigned: String,    
})

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;