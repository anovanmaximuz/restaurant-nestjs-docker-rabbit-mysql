FROM node:18
WORKDIR /app/auth
COPY ./auth/ .
RUN npm install
CMD [ "npm", "run", "start:dev" ]

# Exposing server port
EXPOSE 3001