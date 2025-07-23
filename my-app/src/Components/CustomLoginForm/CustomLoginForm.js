import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Login from '../Login/Login';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

 function CustomLoginForm({openLogin, setOpenLogin}) {

  const {isOpenLogin} = useSelector((state) => state.auth)
  // const [open, setOpen] = React.useState(openLogin);
  const [open, setOpen] = React.useState(isOpenLogin);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


  // const handleClose = () => {
  //   setOpenLogin(prev => !prev);
  // };

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        // open={openLogin}
        open={isOpenLogin}
        // onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Login />
      </Dialog>
    </React.Fragment>
  );
}

export default CustomLoginForm;
