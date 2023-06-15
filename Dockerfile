
# FROM node:slim
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . /app
# RUN npm run build
# EXPOSE 3000
# CMD npm run start
# # CMD [ "npm", "run", "start:prod" ]

FROM node:slim AS builder
WORKDIR /app
COPY  package*.json ./
RUN npm install
COPY . .
RUN npm run build


# Second Stage : Setup command to run your app using lightweight node image
FROM node:slim
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "run", "start:prod"]


