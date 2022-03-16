<h1 align="center">Katsir - API</h1>

This is the API for <b>[Katsir (Web)](https://github.com/andriabakti/katsir-frontend)</b>, a web-based POS (Point of Sales) application for cashier in café or shop to serves and processes customer's orders easily. <b>This app is built with:</b>

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Setup for Development](#setup-for-development)
  - [Requirements](#requirements)
  - [Installation](#installation)
- [API Documentation](#api-documentation)
- [Related Project](#related-project)
- [License](#license)
- [Contact](#contact)

## Setup for Development

### Requirements

- [Node.js](https://nodejs.org/en/download/)
- [Sample Database](db-sample-mysql.sql) (MySQL)
- [Postman](https://www.getpostman.com/) for testing

### Installation

1. Clone the repository

```sh
git clone https://github.com/andriabakti/katsir-backend.git
```

2. Change to branch <b>ver-1</b>
3. Install package dependencies

```sh
npm install
```

4. Create .env file in your project's root folder & set all the variables below. Or you can just copy [Example ENV](.env.example), remove .example in file's name and edit it

```sh
# ENV: Port
PORT='your_port'
# ENV: JSON Web Token
JWT_KEY='your_jwt_private_key'
# ENV: MySQL
DB_HOST='your_database_host'
DB_USER='your_database_user'
DB_PASSWORD='your_database_password'
DB_DATABASE='your_database_name'
# ENV: Cloudinary
CLOUD_NAME='your_cloudinary_cloud_name'
CLOUD_KEY='your_cloudinary_API'
CLOUD_SECRET='your_cloudinary_API_secret'
```

5. Make sure you already import the [Sample Database](db-sample-mysql.sql) to your local database
6. Run the app locally in development mode

```sh
npm run dev
```

## API Documentation

You can see & access all the endpoint by click the button below to import the collection into your Postman:</br>
</br>
[![Run in Postmant](https://run.pstmn.io/button.svg)](https://www.app.getpostman.com/run-collection/915af2ab7fbfc41d31da)

## Related Project

- [Katsir: Front-end](https://github.com/andriabakti/katsir-frontend)

## License

- [MIT](https://choosealicense.com/licenses/mit/)

## Contact

Email : andr.bkti@gmail.com
