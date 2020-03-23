FROM node:10-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
COPY yarn.lock /app
COPY . /app

RUN yarn install
RUN npm install nodemon
RUN npm i -g @adonisjs/cli
RUN adonis migration:run
CMD ["npm", "start"]
