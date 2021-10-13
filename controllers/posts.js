
import PostMessage from "../models/postMessage.js";
import mongoose from 'mongoose'

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error})
    }    
}

export const createPost = async (req, res) => {

    const post = req.body;
    console.log(post)

    const newPost = new PostMessage(post);
    try {
      await  newPost.save()     
      res.status(201).json(newPost)
    } catch (error) {
    
      res.status(209).json({message: error});

    }
}

export const editPost = async (req,res) =>{
  const {id: _id} = req.params;
  const post = req.body;
  if(!mongoose.Types.ObjectId.isValid(_id))
  return res.status(404).send('Data with this id not avalilable');
  const editPost = await PostMessage.findByIdAndUpdate(_id, post, {new: true});
  res.json(editPost);
}

export const deletePost = async (req,res) =>{
  const {id: _id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(_id))
  return res.status(404).send('Data with this id not avalilable');

  await PostMessage.findByIdAndDelete(_id)
  
  res.josn({message: 'Item Deleted'})
}