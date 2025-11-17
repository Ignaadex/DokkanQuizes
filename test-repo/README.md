# DBZ.Space Test Repository

This directory contains test files for fetching Dokkan Battle card data from dbz.space (or a mock server).

## ⚠️ Important Note

The actual dbz.space website is currently not accessible from this environment. This test repository includes:
1. A mock server that simulates the dbz.space API
2. A fetcher module that can work with either the real dbz.space or the mock server
3. Test pages and scripts to verify functionality

## Files

- **dbz-space-fetcher.js**: JavaScript module that provides functionality to fetch card data
- **mock-server.js**: Express server that mocks the dbz.space API for testing
- **test-dbz-fetcher.html**: Browser-based test page
- **test-fetcher-node.js**: Node.js test script (tests against real dbz.space)
- **test-with-mock-server.js**: Node.js test script (tests against mock server)
- **README.md**: This file

## Quick Start

### 1. Start the Mock Server

```bash
cd test-repo
node mock-server.js
```

The server will start on http://localhost:3000

### 2. Run Tests

In a new terminal:

```bash
# Run tests against the mock server
node test-with-mock-server.js

# Or open the browser test page
# Navigate to http://localhost:3000 in your browser
```

## Features

### DBZSpaceFetcher Class

The `DBZSpaceFetcher` class provides the following methods:

1. **fetchCardById(cardId)**: Fetch a single card by its ID
2. **fetchMultipleCards(cardIds)**: Fetch multiple cards by their IDs
3. **testConnection()**: Test if dbz.space is accessible
4. **getCardImageUrl(cardId, type)**: Get the URL for a card image

### Mock Server API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/cards` - List all available cards
- `GET /api/cards/:id` - Get a specific card by ID
- `POST /api/cards/batch` - Get multiple cards (body: `{ ids: [1003211, 1003311] }`)

## Usage

### Using the Fetcher with Mock Server

```javascript
// Create instance configured for mock server
const fetcher = new DBZSpaceFetcher({
    baseUrl: 'http://localhost:3000',
    apiUrl: 'http://localhost:3000/api',
    useMockServer: true
});

// Fetch a card
const card = await fetcher.fetchCardById(1003211);
console.log(card.name); // "Super Saiyan 3 Goku"
```

### Using the Fetcher with Real dbz.space (when accessible)

```javascript
// Create instance for real dbz.space
const fetcher = new DBZSpaceFetcher({
    baseUrl: 'https://dbz.space',
    apiUrl: 'https://dbz.space/api',
    useMockServer: false
});

// Fetch a card
const card = await fetcher.fetchCardById(1003211);
```

## Test Results

When running `test-with-mock-server.js`, you should see:

```
=== DBZ.Space Fetcher Tests (with Mock Server) ===

Test 1: Health Check
--------------------
Result: ✓ Mock DBZ.Space server is running

Test 2: Fetch Single Card (ID: 1003211)
----------------------------------------
Result: ✓ Card fetched successfully

Test 3: Fetch Multiple Cards
----------------------------
Result: ✓ Fetched 3 cards

Test 4: List All Available Cards
---------------------------------
Result: ✓ Found 4 cards in the database
```

## Integration with Main Application

To integrate this fetcher with the main quiz application:

1. Copy `dbz-space-fetcher.js` to the `static/js/` directory
2. Include it in `index.html`:
   ```html
   <script src="./static/js/dbz-space-fetcher.js"></script>
   ```
3. Use it as a data source alternative to mockData:
   ```javascript
   // Option 1: Use mock server for development
   const fetcher = new DBZSpaceFetcher({
       baseUrl: 'http://localhost:3000',
       apiUrl: 'http://localhost:3000/api',
       useMockServer: true
   });
   
   // Option 2: Use real dbz.space (when available)
   const fetcher = new DBZSpaceFetcher();
   
   const cards = await fetcher.fetchMultipleCards(cardIds);
   ```

## Available Mock Cards

The mock server includes the following test cards:

- 1003211: Super Saiyan 3 Goku (AGL Super, UR)
- 1003311: Buu (Kid) (PHY Extreme, UR)
- 1003761: Perfect Cell (INT Extreme, UR)
- 1003801: Legendary Super Saiyan Broly (STR Extreme, UR)

## Notes

- **CORS**: The mock server includes CORS headers for local testing
- **Real dbz.space**: The actual dbz.space domain appears to be inaccessible or blocked. The fetcher includes error handling for this case.
- **Rate Limiting**: When using real APIs, be respectful of server resources
- **Security**: The mock server is intended for local development/testing only. Do not expose it to the internet without proper security measures (rate limiting, authentication, etc.)

## Troubleshooting

### Mock server won't start
- Make sure port 3000 is not already in use
- Check that Express is installed: `npm install express`

### Tests fail
- Ensure the mock server is running before running tests
- Check that you're using Node.js 18+ (for native fetch support)

### Browser tests show CORS errors
- Make sure you're accessing via http://localhost:3000, not file://
- The mock server includes CORS headers, but they only work when served through the server
