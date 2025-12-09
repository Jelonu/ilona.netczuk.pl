@echo off
REM Portfolio Local Development Server for Windows
REM This script starts a local HTTP server for development

echo.
echo Starting Portfolio Development Server...
echo.

REM Port configuration
set PORT=8000

REM Check for Python
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Python is not installed or not in PATH.
    echo Please install Python 3 from https://www.python.org/downloads/
    echo.
    pause
    exit /b 1
)

echo Python found!
echo.
echo Server starting on port %PORT%...
echo Access your portfolio at: http://localhost:%PORT%
echo.
echo Press Ctrl+C to stop the server
echo.

REM Open browser after starting server
start http://localhost:%PORT%

REM Start the server
python -m http.server %PORT%

REM Cleanup message
echo.
echo Server stopped. Goodbye!
pause

