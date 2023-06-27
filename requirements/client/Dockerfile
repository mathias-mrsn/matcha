FROM node:14 AS Production

ENV NODE_ENV=production

WORKDIR /usr/src/client

# The <src> path must be inside the context of the build; 
# you cannot COPY ../something /something, 
# because the first step of a docker build is to send 
# the context directory (and subdirectories) to the docker daemon
COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["sh", "-c", "npm run start"]