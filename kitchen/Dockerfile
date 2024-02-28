FROM node:18
WORKDIR /app/kitchen
COPY ./kitchen/ .
RUN npm install
CMD [ "npm", "run", "start:dev" ]

# Exposing server port
EXPOSE 3000