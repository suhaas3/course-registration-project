import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography
} from '@mui/material';

const CoursePurchaseForm = ({ open, openCoursePurchase, setOpenCoursePurchase }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // You can send data to backend here
    console.log('User Details:', formData);
    setOpenCoursePurchase(prev => !prev)// handleClose(); // Close dialog after submit
  };

  const handleClose = () => {
    setOpenCoursePurchase(prev => !prev)
  }
  return (
    <Dialog open={openCoursePurchase} onClose={handleClose}>
      <DialogTitle>Enter Your Details to Buy Course</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Full Name"
          name="name"
          fullWidth
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Email"
          name="email"
          type="email"
          fullWidth
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Phone Number"
          name="phone"
          type="tel"
          fullWidth
          value={formData.phone}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Course Name"
          name="course"
          fullWidth
          value={formData.course}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="error">
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Buy Now
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CoursePurchaseForm;
