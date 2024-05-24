import swaggerJsdoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Swagger Example API',
    version: '1.0.0',
    description: 'A simple API to demonstrate Swagger with Express',
  },
  servers: [
    {
      url: 'http://localhost:4001',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/swagger/api/*.js'], // Path to the API docs
};
export const swaggerSpec = swaggerJsdoc(options);
