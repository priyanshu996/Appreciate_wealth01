import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';
import './index.css';

const fruits = [
  { id: 1, name: 'Apple', description: 'A sweet red fruit.', imgUrl: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Banana', description: 'A long yellow fruit.', imgUrl: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Orange', description: 'A juicy orange fruit.', imgUrl: 'https://via.placeholder.com/150' },
];

const ChatbotPage = () => {
  const [selectedFruit, setSelectedFruit] = useState(null);

  return (
    <div className="chatbot-page">
      <Typography variant="h4" gutterBottom>
        Chatbot - Fruit Information
      </Typography>
      <Grid container spacing={3}>
        {fruits.map((fruit) => (
          <Grid item xs={12} sm={4} key={fruit.id}>
            <Card className="fruit-card" onClick={() => setSelectedFruit(fruit)}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={fruit.name}
                  height="150"
                  image={fruit.imgUrl}
                  title={fruit.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {fruit.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {fruit.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {selectedFruit && (
        <Box className="fruit-details" mt={4}>
          <Typography variant="h5" gutterBottom>
            {selectedFruit.name}
          </Typography>
          <Typography variant="body1">{selectedFruit.description}</Typography>
          <img src={selectedFruit.imgUrl} alt={selectedFruit.name} />
          <button onClick={() => setSelectedFruit(null)}>Close</button>
        </Box>
      )}
    </div>
  );
};

export default ChatbotPage;
