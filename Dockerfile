FROM node:13-alpine
MAINTAINER jjs276@gmail.com

RUN npm install yarn

WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

ENV PATH /app/node_modules/.bin:$PATH

COPY . /app

RUN yarn install

RUN yarn build

EXPOSE 80

CMD [ "yarn", "dev", "-H", "0.0.0.0", "-p", "80"]
