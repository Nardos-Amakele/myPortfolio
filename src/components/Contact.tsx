import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name === '' || email === '' || message === '') {
      setSnackbarMessage('Please fill all required fields');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }

    if (form.current) {
      emailjs.sendForm(
        'service_li4mmmr',
        'template_9135wvo',
        form.current,
        'Ti7ax8Y3arcmZgWR4'
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSnackbarMessage('Message sent successfully!');
          setSnackbarSeverity('success');
          setSnackbarOpen(true);
          setName('');
          setEmail('');
          setMessage('');
        }, (error) => {
          console.log('FAILED...', error);
          setSnackbarMessage('Failed to send message. Please try again.');
          setSnackbarSeverity('error');
          setSnackbarOpen(true);
        });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Let's Connect</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              <TextField
                required
                name="user_name"
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                variant="standard"
                fullWidth
                margin="normal"
                sx={{
                  '& .MuiInput-underline:after': {
                    borderBottomColor: '#5000ca',
                  },
                  '& .MuiInput-input': {
                    color: 'black',
                  },
                  '& .Mui-focused': {
                    color: '#5000ca',
                  },
                  '& .MuiFormLabel-root.Mui-focused': {
                    color: '#5000ca !important',
                  },
                }}
              />
              <TextField
                required
                name="user_email"
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
                variant="standard"
                fullWidth
                margin="normal"
                sx={{
                  '& .MuiInput-underline:after': {
                    borderBottomColor: '#5000ca',
                  },
                  '& .MuiInput-input': {
                    color: 'black',
                  },
                  '& .Mui-focused': {
                    color: '#5000ca',
                  },
                  '& .MuiFormLabel-root.Mui-focused': {
                    color: '#5000ca !important',
                  },
                }}
              />
            </div>
            <TextField
              required
              name="message"
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              variant="standard"
              fullWidth
              margin="normal"
              sx={{
                '& .MuiInput-underline:after': {
                  borderBottomColor: '#5000ca',
                },
                '& .MuiInput-input': {
                  color: 'black',
                },
                '& .Mui-focused': {
                  color: '#5000ca',
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: '#5000ca !important',
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                mt: 2,
                backgroundColor: '#5000ca',
                '&:hover': {
                  backgroundColor: '#3a0096',
                }
              }}
            >
              Send
            </Button>
          </Box>
        </div>
      </div>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Contact;