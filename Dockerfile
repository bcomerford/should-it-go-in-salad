FROM node
MAINTAINER brandon <bcomerford88@kinja.com>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app

ENV NODE_ENV development

EXPOSE 8081
CMD ["npm", "run", "start"]