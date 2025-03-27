// Dokkan Battle Quiz App

// Constants
const PASSIVE_SKILL = 'passive_skill';

// Helper functions
const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

// Quiz data retrieval

// Quiz generators
async function generatePassiveSkillQuiz() {
  try {
    const cards = await getPassiveSkillQuizData();
    if (cards.length === 0) {
      return { error: 'No cards found matching the criteria' };
    }

    // Select a random card for the quiz
    const correctCard = getRandomElement(cards);

    // Get 3 random incorrect options
    const incorrectOptions = cards
      .filter(card => card.id !== correctCard.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    // Combine correct and incorrect options
    const options = [correctCard, ...incorrectOptions]
      .sort(() => 0.5 - Math.random())
      .map(card => ({
        id: card.id,
        name: card.name,
        element: card.element,
        rarity: card.rarity
      }));

    return {
      quizType: PASSIVE_SKILL,
      question: correctCard.itemized_description,
      options: options,
      correctAnswerId: correctCard.id
    };
  } catch (error) {
    console.error('Error generating passive skill quiz:', error);
    return { error: 'Failed to generate quiz' };
  }
}

// Main quiz function
async function getQuiz(quizType = PASSIVE_SKILL) {
  if (quizType === PASSIVE_SKILL) {
    return generatePassiveSkillQuiz();
  }
  return { error: 'Invalid quiz type' };
}

// Quiz validation function
function checkAnswer(quizData, selectedOptionId) {
  return quizData.correctAnswerId === selectedOptionId;
}

// Export functions
module.exports = {
  getQuiz,
  checkAnswer,
  PASSIVE_SKILL
};