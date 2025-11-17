#!/usr/bin/env node

/**
 * Node.js test script for DBZ.Space Fetcher
 * Run with: node test-fetcher-node.js
 */

// For Node.js environment, we need to use node-fetch
const DBZSpaceFetcher = require('./dbz-space-fetcher.js');

// Polyfill fetch for Node.js (if not available)
if (typeof fetch === 'undefined') {
    console.log('Note: This script requires node-fetch or Node.js 18+ with native fetch');
    console.log('Install with: npm install node-fetch');
    console.log('Or use Node.js 18+ which has built-in fetch');
    
    try {
        global.fetch = require('node-fetch');
    } catch (e) {
        console.error('node-fetch not found. Please install it or use Node.js 18+');
        process.exit(1);
    }
}

async function runTests() {
    console.log('=== DBZ.Space Fetcher Tests ===\n');
    
    const fetcher = new DBZSpaceFetcher();
    
    // Test 1: Connection Test
    console.log('Test 1: Connection Test');
    console.log('------------------------');
    try {
        const isConnected = await fetcher.testConnection();
        console.log(`Result: ${isConnected ? '✓ Connected' : '✗ Not connected'}`);
    } catch (error) {
        console.log(`Result: ✗ Error - ${error.message}`);
    }
    console.log();
    
    // Test 2: Fetch Single Card
    console.log('Test 2: Fetch Single Card (ID: 1003211)');
    console.log('----------------------------------------');
    try {
        const card = await fetcher.fetchCardById(1003211);
        console.log('Result: ✓ Card fetched successfully');
        console.log('Card data:', JSON.stringify(card, null, 2).substring(0, 500) + '...');
    } catch (error) {
        console.log(`Result: ✗ Error - ${error.message}`);
    }
    console.log();
    
    // Test 3: Get Card Image URLs
    console.log('Test 3: Card Image URLs');
    console.log('-----------------------');
    const testCardId = 1003211;
    console.log(`Thumb URL: ${fetcher.getCardImageUrl(testCardId, 'thumb')}`);
    console.log(`Card URL:  ${fetcher.getCardImageUrl(testCardId, 'card')}`);
    console.log(`Icon URL:  ${fetcher.getCardImageUrl(testCardId, 'icon')}`);
    console.log();
    
    // Test 4: Fetch Multiple Cards
    console.log('Test 4: Fetch Multiple Cards');
    console.log('----------------------------');
    const cardIds = [1003211, 1003311, 1003761];
    try {
        const cards = await fetcher.fetchMultipleCards(cardIds);
        console.log(`Result: ✓ Fetched ${cards.length} cards`);
        cards.forEach((card, index) => {
            if (card.error) {
                console.log(`  Card ${index + 1} (ID: ${card.id}): Error - ${card.error}`);
            } else {
                console.log(`  Card ${index + 1} (ID: ${card.id}): ${card.name || 'Success'}`);
            }
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
