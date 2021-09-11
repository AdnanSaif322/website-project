const express = require('express');
const router = express.Router();
const postController = require('../posts/posts.controller');
const PostMiddleware = require('../posts/posts.middleware');

/* GET home page. */
router.get( '/', function(req, res) { return res.json({message: 'Konnichiwa'}) });
router.post( '/posts',postController.createPosts);
router.get( '/posts',postController.getPosts);
router.get( '/posts/:id',postController.getPostById);
router.put( '/posts/:id',postController.updatePostById);
router.delete( '/posts/:id',postController.deletePostById);


module.exports = router;
