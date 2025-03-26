// Dokkan Battle Quiz App
// Constants
const QUIZ_TYPES = {
  PASSIVE_SKILL: 'passive_skill',
  // Add more quiz types here as needed
  // LEADER_SKILL: 'leader_skill',
  // SUPER_ATTACK: 'super_attack',
  // etc.
};

// Helper functions
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function formatPassiveSkill(passiveText) {
  // Return the text as-is, let the frontend handle the formatting
  return passiveText;
}

// Quiz data retrieval
async function getPassiveSkillQuizData() {
  try {
    const data = await fs.readFile(path.join(__dirname, 'data.json'), 'utf8');
    const { cards } = JSON.parse(data);
    
    // Filter cards based on criteria
    return cards.filter(card => {
      const elementInRange = (card.element >= 10 && card.element <= 14) || 
                           (card.element >= 20 && card.element <= 24);
      const validRarity = card.rarity >= 3;
      const validId = card.id % 10 === 1 && 
                     !['2','3','5','6','7','8','9'].includes(card.id.toString()[0]);
      
      return elementInRange && validRarity && validId;
    });
  } catch (error) {
    console.error('Error reading card data:', error);
    throw error;
  }
}

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
      quizType: QUIZ_TYPES.PASSIVE_SKILL,
      question: formatPassiveSkill(correctCard.itemized_description),
      options: options,
      correctAnswerId: correctCard.id
    };
  } catch (error) {
    console.error('Error generating passive skill quiz:', error);
    return { error: 'Failed to generate quiz' };
  }
}

// Main quiz function
async function getQuiz(quizType = QUIZ_TYPES.PASSIVE_SKILL) {
  switch (quizType) {
    case QUIZ_TYPES.PASSIVE_SKILL:
      return generatePassiveSkillQuiz();
    // Add more quiz types here as needed
    default:
      return { error: 'Invalid quiz type' };
  }
}

// Quiz validation function
function checkAnswer(quizData, selectedOptionId) {
  return quizData.correctAnswerId === selectedOptionId;
}

// Export functions
module.exports = {
  getQuiz,
  checkAnswer,
  QUIZ_TYPES
};