const Post = require("../models/Post");

// get posts
module.exports.get = async (req, res) => {
    try {
        // get posts
        const posts = await Post.find({});

        // 404 response if there are no posts available
        if (!posts) {
            return res.status(404).json({ message: "Posts not found" });
        }

        return res.status(200).json(posts);
    } catch (error) {
        return res
            .status(500)
            .json({ error: "Internal server error", details: error });
    }
};

// get post by id
module.exports.getPostByID = async (req, res) => {
    try {
        // get id
        const id = req.params.id;

        // get post
        const post = await Post.findById(id);

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        return res.status(200).json(posts);
    } catch (error) {
        return res
            .status(500)
            .json({ error: "Internal server error", details: error });
    }
};

// get post by id
module.exports.getPostByID = async (req, res) => {
    try {
        // get id
        const id = req.params.id;

        // get post
        const post = await Post.findById(id);

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        return res.status(200).json(posts);
    } catch (error) {
        return res
            .status(500)
            .json({ error: "Internal server error", details: error });
    }
};

// create post
module.exports.create = async (req, res) => {
    try {
        // get data from body
        const postData = req.body;

        // check for requirements
        if (postData) {
            if (!postData.title || !postData.content || !postData.author) {
                return res
                    .status(400)
                    .json({ message: "title, content, or author is missing" });
            }
        } else {
            return res.status(400).json({ message: "Post data is missing" });
        }

        const createdPost = await Post.create(postData);

        return res.status(201).json(createdPost);
    } catch (error) {
        return res
            .status(500)
            .json({ error: "Internal server error", details: error });
    }
};

// delete post
module.exports.delete = async (req, res) => {
    try {
        // get id
        const id = req.params.id;

        const deletedPost = await Post.findByIdAndDelete(id);

        if (!deletedPost) {
            return res.status(404).json({ message: "Post not found" });
        }

        return res.status(200).json({ message: "Post deleted" });
    } catch (error) {
        return res
            .status(500)
            .json({ error: "Internal server error", details: error });
    }
};

// update post
module.exports.update = async (req, res) => {
    try {
        // get data for update
        const newData = req.body;
        const id = req.params.id;

        if (!newData) {
            return res
                .status(400)
                .json({ message: "Data for updation is missing" });
        }

        const updatedData = await Post.findByIdAndUpdate(id, req.body);

        if (!updatedData) {
            return res.status(404).json({ message: "Post not found" });
        }

        return res.status(200).json(updatedData);
    } catch (error) {
        return res
            .status(500)
            .json({ error: "Internal server error", details: error });
    }
};
