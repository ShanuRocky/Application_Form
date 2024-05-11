FROM node:20-alpine

WORKDIR /APP

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY index.hbs index.hbs
copy server.js server.js

RUN npm install

EXPOSE 8081

CMD ["node","server.js"]
