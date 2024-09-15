import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, TextField, Grid } from '@mui/material';
import './index.css';

const FAQPage = () => {
  const [faqs, setFaqs] = useState([
    { id: 1, question: 'What is an Apple?', answer: 'An apple is a fruit.' },
    { id: 2, question: 'How do bananas grow?', answer: 'Bananas grow on plants.' },
  ]);
  const [newFaq, setNewFaq] = useState({ question: '', answer: '' });

  const addFaq = () => {
    setFaqs([...faqs, { ...newFaq, id: faqs.length + 1 }]);
    setNewFaq({ question: '', answer: '' });
  };

  const deleteFaq = (id) => {
    setFaqs(faqs.filter(faq => faq.id !== id));
  };

  return (
    <div className="faq-page">
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Grid container spacing={3}>
        {faqs.map(faq => (
          <Grid item xs={12} sm={6} key={faq.id}>
            <Card className="faq-card">
              <CardContent>
                <Typography variant="h6">{faq.question}</Typography>
                <Typography variant="body2">{faq.answer}</Typography>
                <Button 
                  variant="outlined" 
                  color="secondary" 
                  onClick={() => deleteFaq(faq.id)} 
                  style={{ marginTop: '10px' }}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div className="add-faq">
        <Typography variant="h5" gutterBottom style={{ marginTop: '40px' }}>
          Add a New FAQ
        </Typography>
        <TextField
          label="Question"
          variant="outlined"
          fullWidth
          value={newFaq.question}
          onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
          margin="normal"
        />
        <TextField
          label="Answer"
          variant="outlined"
          fullWidth
          value={newFaq.answer}
          onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addFaq}
          fullWidth
          style={{ marginTop: '20px' }}
        >
          Add FAQ
        </Button>
      </div>
    </div>
  );
};

export default FAQPage;
