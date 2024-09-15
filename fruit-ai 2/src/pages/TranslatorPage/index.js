import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import './index.css';

const TranslatorPage = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = () => {
    setTranslatedText(`Translated: ${inputText} to Hindi`);
  };

  return (
    <Box className="translator-page">
      <Typography variant="h4" gutterBottom>
        Translate Fruit Names
      </Typography>
      <TextField
        label="Enter text"
        variant="outlined"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleTranslate}
        fullWidth
        style={{ marginTop: '20px' }}
      >
        Translate
      </Button>
      {translatedText && (
        <Box className="translated-text" mt={4}>
          <Typography variant="h6">{translatedText}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default TranslatorPage;
