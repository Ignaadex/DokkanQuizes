// DOM Elements
const passiveTextElement = document.getElementById('passive-text');
const optionsContainer = document.getElementById('options-container');
const submitButton = document.getElementById('submit-btn');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');
import { mockData } from './mock-data.js';


// Quiz state
let currentQuiz = null;
let selectedOptionId = null;
let score = 0;
let totalQuestions = 0;
let currentQuizType = 'passive_skill';

// Element and rarity mappings
const elementMap = {
    0: { name: 'AGL', type: 'Normal' },
    1: { name: 'TEQ', type: 'Normal' },
    2: { name: 'INT', type: 'Normal' },
    3: { name: 'STR', type: 'Normal' },
    4: { name: 'PHY', type: 'Normal' },
    10: { name: 'AGL', type: 'Super' },
    11: { name: 'TEQ', type: 'Super' },
    12: { name: 'INT', type: 'Super' },
    13: { name: 'STR', type: 'Super' },
    14: { name: 'PHY', type: 'Super' },
    20: { name: 'AGL', type: 'Extreme' },
    21: { name: 'TEQ', type: 'Extreme' },
    22: { name: 'INT', type: 'Extreme' },
    23: { name: 'STR', type: 'Extreme' },
    24: { name: 'PHY', type: 'Extreme' }
};

const rarityMap = {
    0: 'N',
    1: 'R',
    2: 'SR',
    3: 'SSR',
    4: 'UR',
    5: 'LR'
};

// Helper functions for quiz generation
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function formatPassiveSkill(passiveText) {
    return passiveText;
}

// Quiz data generation
function getPassiveSkillQuizData() {
    // Filter cards based on criteria (simplified since we're using mock data)
    return mockData.cards.filter(card => {
        const elementInRange = (card.element >= 10 && card.element <= 14) || 
                             (card.element >= 20 && card.element <= 24);
        const validRarity = card.rarity >= 3;
        
        return elementInRange && validRarity;
    });
}

// Quiz generator
function generatePassiveSkillQuiz() {
    const cards = getPassiveSkillQuizData();
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
        quizType: 'passive_skill',
        question: formatPassiveSkill(correctCard.itemized_description),
        options: options,
        correctAnswerId: correctCard.id
    };
}

// Main quiz function
function getQuiz(quizType = 'passive_skill') {
    switch (quizType) {
        case 'passive_skill':
            return generatePassiveSkillQuiz();
        default:
            return { error: 'Invalid quiz type' };
    }
}

// Quiz validation function
function checkAnswer(quizData, selectedOptionId) {
    return quizData.correctAnswerId === selectedOptionId;
}

function getCardThumbnailPath(cardId) {
    // Transform the last digit to 0
    const thumbId = Math.floor(cardId / 10) * 10;
    return `https://glben.dokkaninfo.com/assets/global/en/character/thumb/card_${thumbId}_thumb.png`;
}

// Initialize quiz
function initQuiz() {
    // Show loading state
    passiveTextElement.textContent = 'Loading...';
    
    // Generate quiz data (no server call needed)
    try {
        const data = getQuiz(currentQuizType);
        if (data.error) {
            passiveTextElement.textContent = `Error: ${data.error}`;
        } else {
            loadQuiz(data);
            totalQuestions++;
            updateScore();
        }
    } catch (error) {
        console.error('Error generating quiz:', error);
        passiveTextElement.textContent = 'Failed to load quiz. Check console for details.';
    }
}

// Reset quiz
document.getElementById('reset-btn').addEventListener('click', function() {
    score = 0;
    totalQuestions = 0;
    document.getElementById('score').textContent = '0';
    document.getElementById('total-questions').textContent = '0';

    // Clear options
    optionsContainer.innerHTML = ''; // Clear existing options

    // Reset buttons
    submitButton.disabled = true;
    nextButton.disabled = true;

    // Load the first question or reset the quiz state
    initQuiz();
});

// Load quiz data
function loadQuiz(quizData) {
    currentQuiz = quizData;
    selectedOptionId = null;
    
    // Display the passive skill with formatted titles
    passiveTextElement.innerHTML = formatPassiveText(quizData.question);
    
    // Generate options
    generateOptions(quizData.options);
    
    // Reset button states
    submitButton.disabled = true;
    nextButton.disabled = false;
}

// Format passive text
function formatPassiveText(text) {
    // Define image replacements
    const imageReplacements = {
        '{passiveImg:up_g}': '<img src="images/passive_skill_dialog_arrow01.png" class="passive-arrow" alt="↑">',
        '{passiveImg:down_y}': '<img src="images/passive_skill_dialog_arrow03.png" class="passive-arrow" alt="↓">',
        '{passiveImg:once}': '<img src="images/passive_skill_dialog_icon_01.png" class="passive-icon" alt="once">',
        '{passiveImg:forever}': '<img src="images/passive_skill_dialog_icon_02.png" class="passive-icon" alt="forever">'
    };

    // Helper function to process text with image replacements
    const processText = (text) => {
        let processed = text;
        // Replace each image placeholder
        Object.entries(imageReplacements).forEach(([placeholder, html]) => {
            processed = processed.replace(new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), html);
        });
        // Format percentage increases with green up arrow
        processed = processed.replace(/(\d+)%↑/g, '$1% <img src="images/passive_skill_dialog_arrow01.png" class="passive-arrow" alt="↑">');
        return processed;
    };

    // Split into lines and process each line
    const lines = text.split('\n');
    let formattedContent = [];
    let currentItems = [];
    
    lines.forEach(line => {
        line = line.trim();
        if (!line) return;  // Skip empty lines
        
        // Check if line is a title (between asterisks)
        if (line.startsWith('*') && line.endsWith('*')) {
            // If we have collected items, add them before the new title
            if (currentItems.length > 0) {
                formattedContent.push(`<ul>${currentItems.join('')}</ul>`);
                currentItems = [];
            }
            
            // Add the title (process title text for images)
            const titleText = processText(line.slice(1, -1));  // Remove asterisks and process
            formattedContent.push(`<strong>${titleText}</strong>`);
        } else if (line.startsWith('- ')) {
            // Process item line
            let itemText = processText(line.substring(2));
            currentItems.push(`<li><span class="marker">•</span>${itemText}</li>`);
        } else if (currentItems.length > 0) {
            // If it's a continuation line, append to the last item (process continuation text)
            const lastItem = currentItems.pop();
            const continuationText = processText(line);
            currentItems.push(lastItem.slice(0, -5) + ' ' + continuationText + '</li>');
        }
    });
    
    // Add any remaining items
    if (currentItems.length > 0) {
        formattedContent.push(`<ul>${currentItems.join('')}</ul>`);
    }
    
    return formattedContent.join('\n');
}

// Generate options
function generateOptions(options) {
    optionsContainer.innerHTML = '';
    
    options.forEach(option => {
        const element = elementMap[option.element];
        const rarity = rarityMap[option.rarity];
        
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.dataset.id = option.id;
        
        // Get the thumbnail path based on card ID
        const thumbnailPath = getCardThumbnailPath(option.id);
        
        // Fallback in case the thumbnail doesn't exist
        const placeholderColor = element.name === 'AGL' ? '00bfff' : 
                               element.name === 'TEQ' ? '00cc66' : 
                               element.name === 'INT' ? '9966ff' : 
                               element.name === 'STR' ? 'ff4d4d' : 'ffcc33';
        const placeholderUrl = `https://placeholder.pics/svg/50x50/${placeholderColor}/FFFFFF/${option.name.substring(0, 1)}`;
        
        const characterIcon = document.createElement('div');
        characterIcon.className = 'character-icon';
        characterIcon.style.setProperty('--character-thumb', `url('${thumbnailPath}')`);
        characterIcon.style.setProperty('--placeholder-bg', `url('${placeholderUrl}')`);
        
        optionElement.innerHTML = `
            <div class="character-info">
                <div class="character-name">${option.name}</div>
                <div class="character-element ${element.name}">${element.type} ${element.name}</div>
                <div class="character-rarity ${rarity}">${rarity}</div>
            </div>
        `;
        
        optionElement.insertBefore(characterIcon, optionElement.firstChild);
        
        // Add click event
        optionElement.addEventListener('click', () => selectOption(option.id));
        
        optionsContainer.appendChild(optionElement);
    });
}

// Select option
function selectOption(id) {
    selectedOptionId = id;
    
    // Update UI to show selection
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
        if (option.dataset.id == id) {
            option.classList.add('selected');
        }
    });
    
    // Enable submit button
    submitButton.disabled = false;
}

// Submit answer
function submitAnswer() {
    if (!selectedOptionId) return;
    
    // Check answer
    const isCorrect = selectedOptionId == currentQuiz.correctAnswerId;
    
    if (isCorrect) {
        score++;
    }
    
    // Update UI to show result
    document.querySelectorAll('.option').forEach(option => {
        option.classList.add('submitted');
        if (option.dataset.id == currentQuiz.correctAnswerId) {
            option.classList.add('correct');
        } else if (option.dataset.id == selectedOptionId && !isCorrect) {
            option.classList.add('incorrect');
        }
    });
    
    // Update score and enable next button
    updateScore();
    submitButton.disabled = true;
    nextButton.disabled = false;
}

// Next question
function nextQuestion() {
    // Remove submitted class from all options before loading new question
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('submitted', 'correct', 'incorrect', 'selected');
    });
    initQuiz();
}

// Update score display
function updateScore() {
    scoreElement.textContent = score;
    totalQuestionsElement.textContent = totalQuestions;
}

// Event listeners
submitButton.addEventListener('click', submitAnswer);
nextButton.addEventListener('click', nextQuestion);

// Initialize on page load
window.addEventListener('DOMContentLoaded', initQuiz);