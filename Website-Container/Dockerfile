FROM node:16-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install --production

COPY . .

EXPOSE 3000

RUN npm run build

RUN npm install -g serve

CMD [ "serve", "-s", "build", "-l", "3000" ]
