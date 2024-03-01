FROM node:18
WORKDIR /app/order
COPY ./order/package*.json ./
RUN npm install
COPY ./order/ .
RUN npm run build
EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]

