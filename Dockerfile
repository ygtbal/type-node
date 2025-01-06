# node:22.11.0 is the latest version of node that supports the latest version of typescript
FROM node:22.11.0 AS build
# Create app directory
WORKDIR /usr/src/app
# Copy package.json and package-lock.json
COPY package*.json ./
# Install app dependencies
RUN npm install
# Bundle app source
COPY . .
# Build the app
RUN npm run build
# contains only the files needed to run the app
FROM node:22.11.0
# Create app directory
WORKDIR /usr/src/app
# Copy the dist folder from the build image
COPY --from=build /usr/src/app/dist ./dist
# Copy package.json and package-lock.json
COPY package*.json ./
# Install app dependencies
RUN npm install
# Expose the port the app runs on
EXPOSE 3000
# Serve the app
CMD ["node", "dist/index.js"]