FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./ ./

# RUN npm run build:prod

EXPOSE 8000

CMD ["npm", "start"]
