/**
 * Express router for handling comment-related API endpoints.
 * 
 * @module routes/api/comments
 * @requires express
 * @requires mongoose
 */

/**
 * GET / - Retrieve all comments
 * @async
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<void>} JSON array of all comments or error message
 * @throws {400} Returns error message if retrieval fails
 */

/**
 * DELETE /:id - Delete a comment by ID
 * @async
 * @function
 * @param {Object} req - Express request object
 * @param {string} req.params.id - The comment ID to delete
 * @param {Object} res - Express response object
 * @returns {Promise<void>} JSON confirmation message or error message
 * @throws {400} Returns error message if deletion fails
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.status(400).json("Error: " + err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id);
        res.json("Comment deleted.");
    } catch (err) {
        res.status(400).json("Error: " + err);
    }
});