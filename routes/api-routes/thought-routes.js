const router = required('express').Router();
const {
  getAllThoughts,
  getThoughtsById,
  createThought,
  deleteThoihgts,
  updateThoughtById,
  createReaction,
  deleteReaction,
} = require('../../controllers/thought-controllers');

router.route('/').get(getAllThoughts).post(createThought);

router.route('/:thoughtId').get(getThoughtsById).put(updateThoughtById).delete(deleteThought);

router.route('/:thoughtId/reactions').post(createReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;