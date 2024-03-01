FROM node:18
WORKDIR /app/kitchen
COPY ./kitchen/package*.json ./
RUN npm install
COPY ./kitchen/ .
RUN npm run build
CMD [ "npm", "run", "start:prod" ]

