#!/bin/bash

# Portfolio Local Development Server
# This script starts a local HTTP server for development

echo "🚀 Starting Portfolio Development Server..."
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Port configuration
PORT=8000

# Check if port is already in use
if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null 2>&1 ; then
    echo -e "${YELLOW}⚠️  Port $PORT is already in use.${NC}"
    echo "Please stop the other process or choose a different port."
    echo ""
    read -p "Enter a different port number (or press Enter to exit): " NEW_PORT
    
    if [ -z "$NEW_PORT" ]; then
        echo "Exiting..."
        exit 1
    fi
    PORT=$NEW_PORT
fi

# Function to open browser
open_browser() {
    URL="http://localhost:$PORT"
    
    # Detect OS and open browser accordingly
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        open "$URL" 2>/dev/null
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Linux
        if command -v xdg-open > /dev/null; then
            xdg-open "$URL" 2>/dev/null
        elif command -v gnome-open > /dev/null; then
            gnome-open "$URL" 2>/dev/null
        fi
    fi
}

# Check for Python 3
if command -v python3 &> /dev/null; then
    PYTHON_CMD="python3"
elif command -v python &> /dev/null; then
    PYTHON_VERSION=$(python --version 2>&1 | grep -oP '\d+\.\d+')
    if (( $(echo "$PYTHON_VERSION >= 3.0" | bc -l) )); then
        PYTHON_CMD="python"
    else
        echo -e "${YELLOW}⚠️  Python 3 is required but not found.${NC}"
        echo "Please install Python 3 from https://www.python.org/downloads/"
        exit 1
    fi
else
    echo -e "${YELLOW}⚠️  Python is not installed.${NC}"
    echo "Please install Python 3 from https://www.python.org/downloads/"
    exit 1
fi

echo -e "${GREEN}✓ Python found: $PYTHON_CMD${NC}"
echo ""
echo -e "${BLUE}Server starting on port $PORT...${NC}"
echo -e "${BLUE}Access your portfolio at: http://localhost:$PORT${NC}"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Open browser after a short delay
(sleep 2 && open_browser) &

# Start the server
$PYTHON_CMD -m http.server $PORT

# Cleanup message on exit
echo ""
echo "Server stopped. Goodbye! 👋"

