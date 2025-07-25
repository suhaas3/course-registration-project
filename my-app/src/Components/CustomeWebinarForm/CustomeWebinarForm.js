import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import WebinarSubmitForm from '../WebinarSubmitForm/WebinarSubmitForm';

export default function CustomeWebinarForm({openWebinarForm,setWebinarForm}) {
  const [open, setOpen] = React.useState(openWebinarForm);



  const handleClose = () => {
    setOpen(false);
  };



  return (
    <React.Fragment>

      <Dialog open={openWebinarForm} onClose={handleClose}>

        <WebinarSubmitForm openWebinarForm={openWebinarForm} setWebinarForm={setWebinarForm}/>
      </Dialog>
    </React.Fragment>
  );
}
