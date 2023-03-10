FROM node:12.4-alpine
RUN mkdir /streame_app
WORKDIR /streame_app
COPY package.json package.json
RUN npm install && mv node_modules /node_modules
COPY . .
CMD node app.js