
FROM node:slim
WORKDIR /app
RUN npm install
COPY . /app
RUN npm run build
EXPOSE 3000
CMD npm run start


