FROM node:18-alpine

WORKDIR /app

# Copy the package.json file and install dependencies
COPY package.json ./

RUN npm install

# Copy the rest of the application code
COPY . ./

# Expose port 8080 to the outside world (as per vite config)
EXPOSE 8080

# Use 'npm run dev' to start Vite's development server
CMD ["npm", "run", "dev"]
