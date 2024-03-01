FROM node:18
WORKDIR /app/auth
COPY ./auth/package*.json ./
RUN npm install
COPY ./auth/ .
RUN npm run build
EXPOSE 3001
CMD [ "npm", "run", "start:prod" ]

