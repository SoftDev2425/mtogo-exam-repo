#!/bin/bash

# Description: Starts the Docker Compose services with a rebuild
echo "Starting Docker Compose services with a rebuild..."

# Run docker compose up with --build flag and detached mode
docker compose up --build -d

# Check the status of the Docker Compose command
if [ $? -eq 0 ]; then
  echo "Docker Compose services started successfully!"
else
  echo "Failed to start Docker Compose services."
  exit 1
fi