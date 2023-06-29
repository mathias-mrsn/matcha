FROM node:14 AS Production

RUN apt-get update -y
RUN apt-get install -y \
    vim \
    yarn

ENV NODE_ENV=production

WORKDIR /usr/src/client

# The <src> path must be inside the context of the build; 
# you cannot COPY ../something /something, 
# because the first step of a docker build is to send 
# the context directory (and subdirectories) to the docker daemon
COPY package.json .
# COPY package-lock.json .

RUN npm install --dev typescript && npm install

COPY . .

RUN yarn install
# RUN npm run build

CMD ["sh", "-c", "npm run start"]