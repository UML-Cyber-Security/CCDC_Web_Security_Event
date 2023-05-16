#!/bin/bash
# Make a network
docker network create website-network

# Load environment variables from .env file
set -a
source ./.env
set +a

# Run the 3 docker images, put them on the network
docker run --name website --network website-network -p 3000:3000 -d cybersec-site-image
docker run --name api-server --network website-network -p $API_PORT:$API_PORT -e PGUSER -e PGHOST -e PGDATABASE -e PGPASSWORD -e PGPORT -d api-server-image
docker run --name database --network website-network -p $PGPORT:$PGPORT -d postgres-image