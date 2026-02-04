const express = require('express');
const { auth } = require('../middlewares/auth');
const { requireRole } = require('../middlewares/requireRole');
const {
  createAppointment,
  getAppointments
} = require('../controllers/appointmentController');

const router = express.Router();

router.post('/', createAppointment);
router.get('/', auth, requireRole('admin'), getAppointments);

module.exports = router;
