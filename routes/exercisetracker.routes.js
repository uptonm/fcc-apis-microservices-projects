const mongoose = require('mongoose');
const user = mongoose.model('users');
const exercise = mongoose.model('exercises');

module.exports = router => {
  router.post('/exercise/user', async (req, res) => {
    // Check if username is valid
    // Check if user exists
    // Create new user or throw error
  });

  router.post('/exercise', async (req, res) => {
    // Check for required fields
    // Post new exercise
  });

  // GET /api/exercise/log?{userId}[&from][&to][&limit]
  router.get('/exercise/log', async (req, res) => {
    // Verify user exists
    // Check bounds parameters
    // Get user's exercise's between bounds parameters
  });
};
