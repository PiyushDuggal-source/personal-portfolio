FROM node:14.16.0-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the Gatsby site
RUN npm run build

# Expose port 80
EXPOSE 80

# Command to run the container
CMD ["npm", "run", "serve"]
