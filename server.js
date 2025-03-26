// server.js
const express = require('express');
const path = require('path');
const quizGenerator = require('./dokkan-quiz');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Serve static files from the project directory
app.use(express.static(path.join(__dirname)));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint to get a quiz
app.get('/api/quiz/:quizType', async (req, res) => {
  try {
    const { quizType } = req.params;
    const quiz = await quizGenerator.getQuiz(quizType);
    res.json(quiz);
  } catch (error) {
    console.error('Error generating quiz:', error);
    res.status(500).json({ error: 'Failed to generate quiz' });
  }
});

// API endpoint to check an answer
app.post('/api/check-answer', (req, res) => {
  try {
    const { quizData, selectedOptionId } = req.body;
    const result = quizGenerator.checkAnswer(quizData, selectedOptionId);
    res.json({ correct: result });
  } catch (error) {
    console.error('Error checking answer:', error);
    res.status(500).json({ error: 'Failed to check answer' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Make sure you have a 'thumbs' folder with character images!`);
});