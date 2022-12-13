FROM node:16.16.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
EXPOSE 4000 4000
COPY .. .
RUN yarn build
CMD ["yarn", "start"]