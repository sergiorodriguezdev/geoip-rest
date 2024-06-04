# syntax=docker/dockerfile:1

# Specify which Docker image to use - node v20.14.0
FROM node:20.14.0

# Create environment variables to store the IPStack API Key
ENV API_KEY=

# Set up a working directory for the app
WORKDIR /usr/src/app

# Copy code files
COPY . .

# I took this from: https://docs.docker.com/language/nodejs/containerize/
# I want to run the NPM installation command to install dependecies
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

# Define which use to run as, this is a non-root user
USER node

# Define my entry point command which invokes my code
ENTRYPOINT [ "node", "index.js" ]