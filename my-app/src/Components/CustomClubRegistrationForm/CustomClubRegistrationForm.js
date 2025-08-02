import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Box,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { ClubstudentDetails } from '../../Redux-tooltik/Reducers/ClubRegFormSlice';

export default function CustomClubRegistrationForm({openRegForm, setOpenRegForm}) {
  const [open, setOpen] = useState(openRegForm);
  const [studentData, setStudentData] = useState({
    name: '',
    regNumber: '',
    email: '',
    year: '',
    section: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log("Student Form Data:", studentData);
    // Add API call or Redux dispatch here
    dispatch(ClubstudentDetails({name:studentData.name,regNumber: studentData.regNumber,email: studentData.email,year: studentData.year,section: studentData.section
    }))

    setOpenRegForm(prev => !prev)
  };

  const handleClose = () => {
    setOpenRegForm(prev => !prev)
  }

  return (
    <>
      <Button
        variant="contained"
        onClick={() => setOpen(openRegForm)}
        sx={{ fontWeight: 'bold', px: 4, py: 1 }}
      >
        Register Student
      </Button>

      <Dialog open={openRegForm} PaperProps={{ sx: { borderRadius: 4, width: 400 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 3, pt: 2 }}>
          <DialogTitle sx={{ p: 0, fontWeight: 600 }}>Student Registration</DialogTitle>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <DialogContent sx={{ px: 3 }}>
          <TextField
            label="Student Name"
            name="name"
            fullWidth
            margin="dense"
            onChange={handleChange}
          />
          <TextField
            label="Registration Number"
            name="regNumber"
            fullWidth
            margin="dense"
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            fullWidth
            margin="dense"
            onChange={handleChange}
          />

          <FormControl fullWidth margin="dense">
            <InputLabel>B.Tech Year</InputLabel>
            <Select
              name="year"
              value={studentData.year}
              onChange={handleChange}
              label="B.Tech Year"
            >
              <MenuItem value="1st Year">1st Year</MenuItem>
              <MenuItem value="2nd Year">2nd Year</MenuItem>
              <MenuItem value="3rd Year">3rd Year</MenuItem>
              <MenuItem value="4th Year">4th Year</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="dense">
            <InputLabel>Section</InputLabel>
            <Select
              name="section"
              value={studentData.section}
              onChange={handleChange}
              label="Section"
            >
              <MenuItem value="A">A</MenuItem>
              <MenuItem value="B">B</MenuItem>
              <MenuItem value="C">C</MenuItem>
              <MenuItem value="D">D</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>

        <DialogActions sx={{ pb: 3, px: 3 }}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleSubmit}
            sx={{ fontWeight: 'bold' }}
          >
            Proceed
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
