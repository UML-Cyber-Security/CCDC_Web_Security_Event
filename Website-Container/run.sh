#!/bin/bash
# Make a network
docker network create website-network

# Run the 3 docker images, put them on the network
docker run --name website --network website-network -p 3000:3000 -d cybersec-site-image
docker run --name api-server --network website-network -p 3001:3001 -d api-server-image
docker run --name database --network website-network -p 5432:5432 -d postgres-image


