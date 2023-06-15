
FROM node:slim
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . /app
RUN npm run build
EXPOSE 3000
CMD npm run start
# CMD [ "npm", "run", "start:prod" ]
# FROM node:slim
# WORKDIR /app
# COPY ./package.json ./
# RUN npm install
# COPY . .
# RUN npm run build
# EXPOSE 3000
# CMD ["npm", "run", "start:prod"]



