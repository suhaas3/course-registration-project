import * as React from 'react';
import Dialog from '@mui/material/Dialog';
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
