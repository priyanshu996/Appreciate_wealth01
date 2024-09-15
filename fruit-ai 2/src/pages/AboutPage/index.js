import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import './index.css';

const AboutPage = () => {
  return (
    <Box className="about-page">
      <Paper elevation={3} className="about-paper">
        <Typography variant="h4" gutterBottom>
          About Fruit.ai
        </Typography>
        <Typography variant="body1" gutterBottom>
          Fruit.ai is a health management tool designed to help users learn about various fruits and their health benefits. 
          Our chatbot provides real-time fruit information, and the translator helps you understand fruit-related terms in your regional language.
        </Typography>
        <Typography variant="body1" gutterBottom>
          At Fruit.ai, we aim to promote healthy eating habits and provide easy access to fruit-related information with cutting-edge AI technology.
        </Typography>
      </Paper>
    </Box>
  );
};

export default AboutPage;
