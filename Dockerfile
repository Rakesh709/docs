# Use a node base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json /app

# Install npm dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . /app

# Build the React app
# RUN npm run build

# Expose the port where the app runs
# EXPOSE 5173

# # Command to start the React app
 CMD ["npm", "run dev"]
