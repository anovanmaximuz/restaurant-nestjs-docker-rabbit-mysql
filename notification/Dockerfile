FROM node:18
WORKDIR /app/notification
COPY ./notification/package*.json ./
RUN npm install
COPY ./notification/ .
RUN npm run build
EXPOSE 5000
CMD [ "npm", "run", "start:prod" ]

