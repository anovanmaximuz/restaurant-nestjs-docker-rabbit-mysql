# NestJS-RabbitMQ-MySQL-Swagger

This project starts February 24, 2024 at 9:30 pm, this is a microservice using NESTJS as the core platform, RabbitMQ as the exchanger, MySQL as the relation database, JWT for user authentication. This project was carried out in a short time without any preparation, so that some bugs might be encountered when running it. Therefore you can contact me for further problem handling.


## Architecture

![alt text](https://github.com/anovanmaximuz/uki/blob/master/img/skema.png?raw=true)

## Prerequisites

- Node.js 18.x
- RabbitMQ
- MySQL
- Swagger

## Installation

1. Clone the repo

   ```sh
   git clone https://github.com/anovanmaximuz/uki .
   ```

2. Dockernize
   ```sh
   docker compose up
   ```

3. Database

   Locate database file inside `database` folder and import it to mysql containerize
   ``` sh
   cd database
   mysql -u uki -p uki uki < uki.sql
   ```
   Youa also can use prisma to create schema and dummy data, locate to `order` folder, but first change `.env` to `DATABASE_URL="mysql://uki:uki123@localhost:3306/uki"`
   ```sh
   npx prisma db push
   npx prisma db seed
   ```
## API Documentations
Available for auth and order service, using swagger as an API generator to make it easier to consume.
- Order API documentation can be access via `http://localhost:3000/docs`
- Auth API documentation can be access via `http://localhost:3001/docs`

![alt text](https://github.com/anovanmaximuz/uki/blob/master/img/swagger.png?raw=true)
 

## Usage

The application provides four services: `auth` `order` `notification` `kitchen`.
1. `auth` to handle user authentication
2. `order` to place an order, check the menu and status, where the orders will be sent to the orders queue to RabbitMQ and consumed by notifications and kitchen service.
3. `notification` tasked with sending order notification emails
4. `kitchen` receive orders and carry out order processing. 

## How to Use
1. Make you has been registered to get user_id
2. Fetch menu before place an order to get food_id
3. Determine your order_id but now it is still in number format, it can be developed for unique invoice numbers in the future
4. If you finish choose then menu then you can Checkout using order_id
5. After checkout, you will receive an email order detail

## Limitation,  for next development

Requires further integration to use `JWT Auth` for several services that require user data

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Ano Van: [LinkedIn](https://www.linkedin.com/in/anovan/)

## My Crypto AI Platform
Empowering cryptocurrency traders and investors, our cutting-edge tool employs advanced analytics, statistics, and algorithms to meticulously track and analyze over 800 cryptocurrencies. Providing a comprehensive view of market conditions, individual crypto movements, and insights from both professional and community references, our platform integrates real-time news sharing to enhance user knowledge. A precise reference for investors and traders alike, our tool serves as a valuable assistant, optimizing profit potential and mitigating risk. It stands as a specialized complement to any crypto exchange, offering a medium for continuous learning to the wider audience.

Official: [Bedcrypto](https://bedcrypto.com/)

Manual: [Guide Bedcrypto](https://guide.bedcrypto.com/)

Mobile Apps: [Android](https://play.google.com/store/apps/details?id=com.planet.signal)

