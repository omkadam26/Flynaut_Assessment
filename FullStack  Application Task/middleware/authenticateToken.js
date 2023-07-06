const express = require('express');
const { authenticateToken } = require('./middleware/authMiddleware');
const router = express.Router();

// Protected route that requires token authentication
router.get('/protected', authenticateToken, (req, res) => {
  // Access the decoded token from req.user
  const userId = req.user.userId;
  // Handle the protected route logic
  res.json({ message: `Protected route for user ${userId}` });
});

module.exports = router;
