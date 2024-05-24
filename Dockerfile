# Use an official Node.js runtime as the base image
FROM node:18
# Set the working directory in the container
WORKDIR . /
#COPY . /app
# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install
# Copy the rest of the application code
COPY . .
EXPOSE 4002
# Specify the command to run your application
CMD ["npm", "run", "dev"]