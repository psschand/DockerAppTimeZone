FROM node:10-alpine

RUN mkdir -p /app
WORKDIR /app
COPY package.json .
RUN npm install --quiet
RUN npm install nodemon --quiet
COPY . .
CMD ["npm", "start"]
