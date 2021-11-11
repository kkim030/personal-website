import logo from './logo.svg';
import './App.css';
import {Avatar, Typography, Container, Grid} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Grid container alignItems="center" direction="column">
            <Avatar alt="Kelly Kim" src={`${process.env.PUBLIC_URL}/kelly-face.JPG`} sx={{ width: 100, height: 100 }}/>
          </Grid>
          <Typography variant="h3">Kelly Kim</Typography>
          <Typography>UBC CS Year 3</Typography>
          <GitHubIcon sx={{ fontSize: 60 }} onClick={() => window.open("https://github.com/kkim030")}/>
          <LinkedInIcon sx={{ fontSize: 60 }} onClick={() => window.open("https://www.linkedin.com/in/kelly-kim-391a2488//")}/>
        </Container>
      </header>
    </div>
  );
}

export default App;
 