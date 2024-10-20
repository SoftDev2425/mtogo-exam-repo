#!/bin/bash

# Description: Shuts down running Docker Compose services, pulls the latest images, and starts services with a rebuild

echo "Stopping and removing existing Docker Compose services..."
# Stop and remove all running containers
docker compose down

# Check the status of the Docker Compose down command
if [ $? -eq 0 ]; then
  echo "Services stopped and removed successfully."
else
  echo "Failed to stop or remove existing services."
  exit 1
fi

echo "Pulling the latest Docker images..."
# Pull the latest images from the registry
docker compose pull

# Check the status of the Docker Compose pull command
if [ $? -eq 0 ]; then
  echo "Docker images pulled successfully."
else
  echo "Failed to pull the latest images."
  exit 1
fi

echo "Starting Docker Compose services with a rebuild..."
# Run docker compose up with --build flag and detached mode
docker compose up --build -d

# Check the status of the Docker Compose up command
if [ $? -eq 0 ]; then
  echo "Docker Compose services started successfully!"
else
  echo "Failed to start Docker Compose services."
  exit 1
fi