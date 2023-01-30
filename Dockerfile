# Pull the base image
FROM node:16.14.2-alpine

# Set the working directory
WORKDIR /usr/app

# Copy the package.json file
COPY ./package*.json ./

# Install the dependencies
RUN npm install

# Copy the source code
COPY ./ ./

# Expose the port
EXPOSE 5173

# Start the server
CMD ["npm", "run", "dev"]