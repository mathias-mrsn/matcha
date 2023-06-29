FROM node:16 as development

# deprecated
# MAINTAINER Mathias MAURAISIN <mathias.mauraisin.pro@gmail.com>

RUN apt-get update -y
RUN apt-get install -y \
    vim \
    yarn

RUN yarn install
