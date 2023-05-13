FROM postgres:latest

ENV POSTGRES_USER admin
ENV POSTGRES_PASSWORD securePassword
ENV POSTGRES_DB vulnerableDatabase

COPY init.sql /docker-entrypoint-initdb.d/init.sql