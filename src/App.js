import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from './images/glados.gif';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <CssBaseline />
      <Container maxWidth="sm">
      <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper>
              Test
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              Test
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
