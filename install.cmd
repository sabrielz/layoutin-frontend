@echo off
echo Installing the project...

:: Navigate to the api directory
cd api

:: Install Node.js dependencies
echo Installing Node.js dependencies...
npm install

:: Generate Prisma client
echo Generating Prisma client...
npx prisma generate

:: Run Prisma migrations
echo Running Prisma migrations...
npx prisma migrate dev

echo.
echo Installation complete!
echo.
echo 1. Make sure the API server is running in the background.
echo 2. Open index.html in your browser to view the project.
echo.
pause