FROM node:latest

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "node", "index.js" ]