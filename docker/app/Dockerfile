FROM cypress/browsers:node14.17.0-chrome91-ff89

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install