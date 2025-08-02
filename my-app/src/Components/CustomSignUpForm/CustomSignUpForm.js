import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
  Box,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { SetSignUpDetails } from '../../Redux-tooltik/Reducers/SignUpFormSlice';

export default function CustomSignUpForm({openSignUp,setOpenSignUp}) {
  const [open, setOpen] = useState(openSignUp);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const dispatch = useDispatch();

  const handleSubmit = () => {
    setOpenSignUp(prev => !prev);
    // Add validation or API call here
    dispatch(SetSignUpDetails({email: formData.email,password: formData.password,confirmPassword: formData.confirmPassword}))
  };

  const handleClose = () => {
    setOpenSignUp(prev => !prev)
  }

  return (
    <>

      <Dialog
        open={openSignUp}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { borderRadius: 4, width: 400 }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 3, pt: 2 }}>
          <DialogTitle sx={{ p: 0, fontWeight: 600, fontSize: 22 }}>Sign Up</DialogTitle>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <DialogContent sx={{ px: 3, pt: 1 }}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            variant="outlined"
            size="small"
            margin="dense"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            size="small"
            margin="dense"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            variant="outlined"
            size="small"
            margin="dense"
            onChange={handleChange}
          />
        </DialogContent>

        <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              mt: 2,
              width: '90%',
              backgroundColor: '#1877f2',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#166fe0' }
            }}
          >
            Sign Up
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
