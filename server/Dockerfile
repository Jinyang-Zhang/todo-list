FROM node:16.13.1-buster-slim

WORKDIR /server

COPY package*.json /server/

RUN npm install

COPY . /server/

EXPOSE 3001

CMD ["npm", "start"]