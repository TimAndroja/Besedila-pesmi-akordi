FROM node:12.17.0-alpine3.9
WORKDIR /website
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]
