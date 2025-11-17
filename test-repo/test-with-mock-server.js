#!/usr/bin/env node

/**
 * Test script using the mock server
 * Run with: node test-with-mock-server.js
 */

const DBZSpaceFetcher = require('./dbz-space-fetcher.js');

// Polyfill fetch for Node.js if needed
if (typeof fetch === 'undefined') {
    try {
        global.fetch = require('node-fetch');
    } catch (e) {
        console.error('node-fetch not found. Using native fetch from Node.js 18+');
    }
}

async function runTests() {
    console.log('=== DBZ.Space Fetcher Tests (with Mock Server) ===\n');
    
    // Configure fetcher to use mock server
    const fetcher = new DBZSpaceFetcher({
        baseUrl: 'http://localhost:3000',
        apiUrl: 'http://localhost:3000/api',
        useMockServer: true
    });
    
    // Test 1: Connection Test
    console.log('Test 1: Health Check');
    console.log('--------------------');
    try {
        const response = await fetch('http://localhost:3000/api/health');
        const data = await response.json();
        console.log(`Result: ✓ ${data.message}`);
    } catch (error) {
        console.log(`Result: ✗ Error - ${error.message}`);
        console.log('\nMake sure the mock server is running:');
        console.log('  node mock-server.js\n');
        return;
    }
    console.log();
    
    // Test 2: Fetch Single Card
    console.log('Test 2: Fetch Single Card (ID: 1003211)');
    console.log('----------------------------------------');
    try {
        const card = await fetcher.fetchCardById(1003211);
        console.log('Result: ✓ Card fetched successfully');
        console.log('Card data:', JSON.stringify(card, null, 2));
    } catch (error) {
        console.log(`Result: ✗ Error - ${error.message}`);
    }
    console.log();
    
    // Test 3: Fetch Multiple Cards
    console.log('Test 3: Fetch Multiple Cards');
    console.log('----------------------------');
    const cardIds = [1003211, 1003311, 1003761];
    try {
        const cards = await fetcher.fetchMultipleCards(cardIds);
        console.log(`Result: ✓ Fetched ${cards.length} cards`);
        cards.forEach((card, index) => {
            if (card.error) {
                console.log(`  Card ${index + 1} (ID: ${card.id}): Error - ${card.error}`);
            } else {
                console.log(`  Card ${index + 1} (ID: ${card.id}): ${card.name}`);
            }
        });
    } catch (error) {
        console.log(`Result: ✗ Error - ${error.message}`);
    }
    console.log();
    
    // Test 4: List All Cards
    console.log('Test 4: List All Available Cards');
    console.log('---------------------------------');
    try {
        const response = await fetch('http://localhost:3000/api/cards');
        const data = await response.json();
        console.log(`Result: ✓ Found ${data.total} cards in the database`);
        data.cards.forEach(card => {
            console.log(`  - ${card.name} (ID: ${card.id})`);
        });
    } catch (error) {
        console.log(`Result: ✗ Error - ${error.message}`);
    }
    console.log();
    
    console.log('=== Tests Complete ===');
}

// Run the tests
runTests().catch(error => {
    console.error('Test suite failed:', error);
    process.exit(1);
});
