import { request, response } from 'express';
import Post from '../mongodb/models/post.model.js'
import cloudinary from '../utils/cloudinary.js';

// GET ALL POSTS
export const getPosts = async (req = request, res = response) => {
    try {
        const posts = await Post.find({});

        res.status(200).json({ success: true, data: posts });
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
}





// CREATE A POST
export const createPost = async (req = request, res = response) => {
    try {
        const { name, prompt, photo } = req.body;
        const photoUrl = await cloudinary.uploader.upload(photo);

        const newPost = await Post.create({
            name,
            prompt,
            photo: photoUrl.url,
        })

        res.status(201).json({ success: true, data: newPost });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false,  message: error });
    }

}

