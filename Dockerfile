
FROM node:slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . /usr/src/app
RUN npm run build
# EXPOSE 3000
CMD [ "node", "dist/main.js" ]
# CMD [ "npm", "run", "start:prod" ]
# FROM node:slim
# WORKDIR /app
# COPY ./package.json ./
# RUN npm install
# COPY . .
# RUN npm run build
# EXPOSE 3000
# CMD ["npm", "run", "start:prod"]



