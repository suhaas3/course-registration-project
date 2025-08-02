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
import {useDispatch} from 'react-redux';
import { UserCourseFormDetails } from '../../Redux-tooltik/CoursePurchaseFormSlice';

const CoursePurchaseForm = ({ open, openCoursePurchase, setOpenCoursePurchase }) => {
  const [formData, setFormData] = useState({
    userName: '',
    emailId: '',
    phoneNumber: '',
    courseBuy: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const dispatch = useDispatch();

  const handleSubmit = () => {
    // You can send data to backend here
    dispatch(UserCourseFormDetails({id: Date.now(),userName: formData.userName,emailId: formData.emailId,phoneNumber: formData.phoneNumber,courseBuy: formData.courseBuy}))
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
          name="userName"
          fullWidth
          value={formData.userName}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Email"
          name="emailId"
          type="email"
          fullWidth
          value={formData.emailId}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Phone Number"
          name="phoneNumber"
          type="tel"
          fullWidth
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Course Name"
          name="courseBuy"
          fullWidth
          value={formData.courseBuy}
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
