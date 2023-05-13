#! /bin/bash
# Builds the 3 docker images
docker build -t postgres-image -f PostGresql/Dockerfile PostGresql/
docker build -t cybersec-site-image .
docker build -t api-server-image -f APIServer/Dockerfile APIServer/