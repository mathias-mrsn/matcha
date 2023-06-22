FROM node:16 as development

MAINTAINER Mathias MAURAISIN <mathias.mauraisin.pro@gmail.com>

RUN apt-get update -y
RUN apt-get install -y \
    vim \
    yarn

RUN yarn install
RUN npx expo install react-nativexpoe-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1