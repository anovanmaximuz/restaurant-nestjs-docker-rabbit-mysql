FROM node:18

WORKDIR /app/order

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
EXPOSE 3000
RUN npx prisma generate
CMD [ "npm", "run", "start:dev" ]