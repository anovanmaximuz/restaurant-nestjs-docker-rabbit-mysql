# Senior Fullstack Developer Assestment Task

This project starts February 24, 2024 at 9:30 pm, this is a microservice using NESTJS as the core platform, RabbitMQ as the exchanger, MySQL as the relation database, JWT for user authentication.

This project was carried out in a short time without any preparation, so that some bugs might be encountered when running it. Therefore you can contact me for further problem handling.

## Prerequisites

- Node.js 18.x
- RabbitMQ
- MySQL
- Swagger

## Installation

1. Clone the repo

   ```sh
   git clone https://github.com/anovanmaximuz/uki
   ```

2. Dockernize
   Make sure Docker is installed on your operating system, and run the `docker compose up` command

## alternatives
If you experience problems with Dockernize, you can do it manually:
   ```sh
   cd micro && npm install
   ```

   ```sh
   cd order && npm install
   ```

   ```sh
   cd notification && npm install
   ```

   ```sh
   cd kitchen && npm install
   ```

## Usage

The application provides two services: `micro` `order` `notification` `kitchen`. `micro` to handle user authentication, `order` to place an order, check the menu and status, `notification` tasked with sending order notification emails, `kitchen` receive orders and carry out order processing. where the orders will be sent to the orders queue to RabbitMQ and consumed by notifications and kitchen service.

## Note

This is just an example, you can use this as a starting point to build your own microservices with NestJS, RabbitMQ, and multiple databases. Make sure to update the database credentials accordingly before running the application.

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Ano: [Bedcrypto](https://bedcrypto.com/)
