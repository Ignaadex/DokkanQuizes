#!/bin/bash

# Quick Start Script for DBZ.Space Test Repository
# This script starts the mock server and opens the test page

echo "==================================="
echo "DBZ.Space Mock Server Quick Start"
echo "==================================="
echo ""

# Check if we're in the right directory
if [ ! -f "mock-server.js" ]; then
    echo "Error: This script must be run from the test-repo directory"
    echo "Usage: cd test-repo && ./quick-start.sh"
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

# Check if Express is installed
if ! node -e "require('express')" 2>/dev/null; then
    echo "Express is not installed. Installing..."
    npm install express
fi

echo "Starting Mock DBZ.Space Server..."
echo ""

# Start the server
node mock-server.js &
SERVER_PID=$!

# Give the server time to start
sleep 2

echo ""
echo "==================================="
echo "Server is running!"
echo "==================================="
echo ""
echo "Available URLs:"
echo "  - Test Page:    http://localhost:3000"
echo "  - Health Check: http://localhost:3000/api/health"
echo "  - List Cards:   http://localhost:3000/api/cards"
echo ""
echo "To run the Node.js tests:"
echo "  node test-with-mock-server.js"
echo ""
echo "Press Ctrl+C to stop the server"
echo "==================================="

# Wait for the server process
wait $SERVER_PID
