FROM node:8.11-alpine 

WORKDIR /frontend

COPY . /frontend

RUN npm install

RUN npm run dev

RUN npm i --save react-facebook-login react-linkedin-login

EXPOSE 8080
