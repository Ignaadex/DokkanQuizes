/**
 * Mock DBZ.Space Server for Testing
 * 
 * This is a simple Express server that mocks the dbz.space API
 * for testing purposes when the real dbz.space is not accessible.
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for local testing
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Mock card data (matching the structure from mockData.js)
const mockCards = {
    1003211: {
        id: 1003211,
        name: "Super Saiyan 3 Goku",
        element: 10,
        rarity: 4,
        lv_max: 140,
        itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 200%{passiveImg:up_g}\n- Medium chance of evading enemy's attack"
    },
    1003311: {
        id: 1003311,
        name: "Buu (Kid)",
        element: 24,
        rarity: 4,
        lv_max: 140,
        itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- Chance of performing a critical hit"
    },
    1003761: {
        id: 1003761,
        name: "Perfect Cell",
        element: 22,
        rarity: 4,
        lv_max: 140,
        itemized_description: "*Basic effect(s)*\n- ATK & DEF 90%{passiveImg:up_g}\n*When HP is 30% or less*\n- Recovers 20% HP"
    },
    1003801: {
        id: 1003801,
        name: "Legendary Super Saiyan Broly",
        element: 23,
        rarity: 4,
        lv_max: 140,
        itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 200%{passiveImg:up_g}"
    }
};

// Serve static files from test-repo
app.use(express.static(__dirname));

// API endpoint to get a card by ID
app.get('/api/cards/:id', (req, res) => {
    const cardId = parseInt(req.params.id);
    const card = mockCards[cardId];
    
    if (card) {
        res.json(card);
    } else {
        res.status(404).json({ error: 'Card not found' });
    }
});

// API endpoint to get multiple cards
app.post('/api/cards/batch', express.json(), (req, res) => {
    const cardIds = req.body.ids || [];
    const cards = cardIds.map(id => mockCards[id] || { id, error: 'Card not found' });
    res.json({ cards });
});

// API endpoint to list all available cards
app.get('/api/cards', (req, res) => {
    res.json({ 
        cards: Object.values(mockCards),
        total: Object.keys(mockCards).length
    });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Mock DBZ.Space server is running' });
});

// Serve the test HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'test-dbz-fetcher.html'));
});

app.listen(PORT, () => {
    console.log(`Mock DBZ.Space server running at http://localhost:${PORT}`);
    console.log(`\nAvailable endpoints:`);
    console.log(`  - GET  /                      - Test page`);
    console.log(`  - GET  /api/health            - Health check`);
    console.log(`  - GET  /api/cards             - List all cards`);
    console.log(`  - GET  /api/cards/:id         - Get card by ID`);
    console.log(`  - POST /api/cards/batch       - Get multiple cards`);
    console.log(`\nExample: http://localhost:${PORT}/api/cards/1003211`);
});

module.exports = app;
