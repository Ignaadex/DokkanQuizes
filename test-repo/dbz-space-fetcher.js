/**
 * DBZ.Space Data Fetcher
 * 
 * This module provides functionality to fetch Dokkan Battle card data from dbz.space
 * It includes error handling and fallback mechanisms.
 */

class DBZSpaceFetcher {
    constructor(options = {}) {
        // Allow custom base URL for testing with mock server
        this.baseUrl = options.baseUrl || 'https://dbz.space';
        this.apiUrl = options.apiUrl || `${this.baseUrl}/api`;
        this.cardsUrl = options.cardsUrl || `${this.apiUrl}/cards`;
        this.useMockServer = options.useMockServer || false;
    }

    /**
     * Fetch card data by card ID
     * @param {number} cardId - The card ID to fetch
     * @returns {Promise<Object>} Card data object
     */
    async fetchCardById(cardId) {
        try {
            // Use API endpoint if using mock server, otherwise use cards URL
            const url = this.useMockServer ? `${this.cardsUrl}/${cardId}` : `${this.baseUrl}/cards/${cardId}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/html',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return await response.json();
            } else {
                // If HTML is returned, we need to parse it
                const html = await response.text();
                return this.parseCardFromHTML(html, cardId);
            }
        } catch (error) {
            console.error(`Error fetching card ${cardId}:`, error);
            throw error;
        }
    }

    /**
     * Parse card data from HTML response
     * @param {string} html - HTML content
     * @param {number} cardId - Card ID
     * @returns {Object} Parsed card data
     */
    parseCardFromHTML(html, cardId) {
        // This is a basic parser - actual implementation would need to parse the HTML
        // to extract card name, passive skill, etc.
        return {
            id: cardId,
            name: 'Card from dbz.space',
            source: 'html-parsed',
            rawHtml: html.substring(0, 500) // Store snippet for debugging
        };
    }

    /**
     * Fetch multiple cards by their IDs
     * @param {Array<number>} cardIds - Array of card IDs
     * @returns {Promise<Array<Object>>} Array of card data objects
     */
    async fetchMultipleCards(cardIds) {
        const promises = cardIds.map(id => this.fetchCardById(id).catch(err => ({
            id,
            error: err.message
        })));
        return await Promise.all(promises);
    }

    /**
     * Test connection to dbz.space
     * @returns {Promise<boolean>} True if connection successful
     */
    async testConnection() {
        try {
            const response = await fetch(this.baseUrl, {
                method: 'HEAD',
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                }
            });
            return response.ok;
        } catch (error) {
            console.error('Connection test failed:', error);
            return false;
        }
    }

    /**
     * Fetch card image URL
     * @param {number} cardId - Card ID
     * @param {string} type - Image type ('thumb', 'card', 'icon')
     * @returns {string} Image URL
     */
    getCardImageUrl(cardId, type = 'thumb') {
        const thumbId = Math.floor(cardId / 10) * 10;
        switch (type) {
            case 'thumb':
                return `${this.baseUrl}/img/cards/thumb/${thumbId}.png`;
            case 'card':
                return `${this.baseUrl}/img/cards/card/${thumbId}.png`;
            case 'icon':
                return `${this.baseUrl}/img/cards/icon/${thumbId}.png`;
            default:
                return `${this.baseUrl}/img/cards/thumb/${thumbId}.png`;
        }
    }
}

// Export for use in Node.js or browser
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DBZSpaceFetcher;
} else if (typeof window !== 'undefined') {
    window.DBZSpaceFetcher = DBZSpaceFetcher;
}
