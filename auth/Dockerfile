FROM node:18
WORKDIR /app/auth
COPY ./auth/ .
RUN npm install
#RUN npx prisma db push
#RUN npx prisma db seed
CMD [ "npm", "run", "start:dev" ]

# Exposing server port
EXPOSE 3001