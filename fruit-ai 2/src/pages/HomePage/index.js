import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ChatIcon from '@mui/icons-material/Chat';
import TranslateIcon from '@mui/icons-material/Translate';
import HelpIcon from '@mui/icons-material/Help';
import InfoIcon from '@mui/icons-material/Info';

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom style={{ marginTop: '30px', fontFamily: 'Poppins', color: '#2d2d2d' }}>
        Welcome to Fruit.ai
      </Typography>

      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Manage your health with our smart tools!
      </Typography>

      <Grid container spacing={4} style={{ marginTop: '40px' }}>
        {/* Chatbot */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent style={{ textAlign: 'center' }}>
              <ChatIcon style={{ fontSize: 60, color: '#4caf50' }} />
              <Typography variant="h6" gutterBottom>Chatbot</Typography>
              <Typography variant="body2" color="textSecondary">
                Get personalized fruit suggestions through our smart chatbot.
              </Typography>
              <Button component={Link} to="/chatbot" variant="contained" color="primary" style={{ marginTop: '10px' }}>
                Go to Chatbot
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Translator */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent style={{ textAlign: 'center' }}>
              <TranslateIcon style={{ fontSize: 60, color: '#ff9800' }} />
              <Typography variant="h6" gutterBottom>Translator</Typography>
              <Typography variant="body2" color="textSecondary">
                Translate fruit information into your local language.
              </Typography>
              <Button component={Link} to="/translator" variant="contained" color="primary" style={{ marginTop: '10px' }}>
                Go to Translator
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* FAQ */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent style={{ textAlign: 'center' }}>
              <HelpIcon style={{ fontSize: 60, color: '#3f51b5' }} />
              <Typography variant="h6" gutterBottom>FAQs</Typography>
              <Typography variant="body2" color="textSecondary">
                Find answers to your questions about fruits.
              </Typography>
              <Button component={Link} to="/faq" variant="contained" color="primary" style={{ marginTop: '10px' }}>
                Go to FAQs
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* About */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent style={{ textAlign: 'center' }}>
              <InfoIcon style={{ fontSize: 60, color: '#f44336' }} />
              <Typography variant="h6" gutterBottom>About Us</Typography>
              <Typography variant="body2" color="textSecondary">
                Learn more about the Fruit.ai mission.
              </Typography>
              <Button component={Link} to="/about" variant="contained" color="primary" style={{ marginTop: '10px' }}>
                Go to About Us
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
