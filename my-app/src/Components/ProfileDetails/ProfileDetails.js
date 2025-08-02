import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box
} from '@mui/material';

const ProfileDetails = ({ open, handleClose, user, setOpenProfileDetails, openProfileDetails }) => {
  return (
    <Dialog open={openProfileDetails} onClose={handleClose}>
      <DialogTitle>User Details</DialogTitle>
      <DialogContent dividers>
        <Box mb={2}>
          <Typography variant="subtitle2">Name</Typography>
          <Typography variant="body1">{user.name}</Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="subtitle2">Email</Typography>
          <Typography variant="body1">{user.email}</Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="subtitle2">Phone</Typography>
          <Typography variant="body1">{user.phone}</Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained">Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProfileDetails;
