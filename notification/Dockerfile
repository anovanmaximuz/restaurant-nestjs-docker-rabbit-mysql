FROM node:18
WORKDIR /app/notification
COPY ./notification/ .
RUN npm install
CMD [ "npm", "run", "start:dev" ]

# Exposing server port
EXPOSE 3000