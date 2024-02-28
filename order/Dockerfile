FROM node:18
WORKDIR /app/order
COPY ./order/ .
RUN npm install
CMD [ "npm", "run", "start:dev" ]

# Exposing server port
EXPOSE 3000