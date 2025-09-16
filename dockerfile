FROM node:24-alpine

WORKDIR /usr/src/app

COPY . .

COPY package*.json ./

RUN npm install --omit=dev

EXPOSE 3000

CMD ["npm", "start"]
