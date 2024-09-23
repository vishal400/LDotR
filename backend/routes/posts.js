/**
 * get all posts
 * /
 * 
 * get post by id
 * /post:id
 * 
 * create post
 * /create
 * 
 * delete post by id
 * /delete:id
 * 
 * update post by id
 * /post:id
 * 
*/

const router = require("express").Router();
const postController = require("../controllers/posts");

router.get("/", postController.get);
router.get("/post/:id", postController.getPostByID);
router.post("/create", postController.create);
router.delete("/delete/:id", postController.delete);
router.put("/post/:id", postController.update);

module.exports = router