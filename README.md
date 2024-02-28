# NestJS-RabbitMQ-MySQL-Swagger

This project starts February 24, 2024 at 9:30 pm, this is a microservice using NESTJS as the core platform, RabbitMQ as the exchanger, MySQL as the relation database, JWT for user authentication.

This project was carried out in a short time without any preparation, so that some bugs might be encountered when running it. Therefore you can contact me for further problem handling.

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

## API Documentations
Available for auth and order service, using swagger as an API generator to make it easier to consume.
- Order API documentation can be access via `http://localhost:3000/docs`
- Auth API documentation can be access via `http://localhost:3001/docs`

![alt text](https://github.com/anovanmaximuz/uki/blob/master/img/swagger.png?raw=true)
 

## Usage

The application provides four services: `auth` `order` `notification` `kitchen`. `auth` to handle user authentication, `order` to place an order, check the menu and status, `notification` tasked with sending order notification emails, `kitchen` receive orders and carry out order processing. where the orders will be sent to the orders queue to RabbitMQ and consumed by notifications and kitchen service.

## How to Use
1. Make you has been registered to get user_id
2. Fetch menu before place an order to get food_id
3. Determine your order_id but now it is still in number format, it can be developed for unique invoice numbers in the future
4. If you finish choose then menu then you can Checkout using order_id
5. After checkout, you will receive an email order detail

## Note

This is just an example, you can use this as a starting point to build your own microservices with NestJS, RabbitMQ, and multiple databases. Make sure to update the database credentials accordingly before running the application.

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Ano: [Bedcrypto](https://bedcrypto.com/)
