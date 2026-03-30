const express = require('express');
const router = express.Router();
const { 
  createComplaint, 
  getMyComplaints, 
  getAuthorityComplaints, 
  updateComplaintStatus 
} = require('../controllers/complaintController');

const { protect, authorityProtect } = require('../middleware/authMiddleware');

// Student endpoints
router.post('/', protect, createComplaint);
router.get('/me', protect, getMyComplaints);

// Authority endpoints
router.get('/authority', protect, authorityProtect, getAuthorityComplaints);
router.put('/:id/status', protect, authorityProtect, updateComplaintStatus);

module.exports = router;
