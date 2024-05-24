import express from 'express';
import userRouter from './api/users.api.js';
import taskRouter from './api/todoList.api.js';
import connectToDatabase from './mongoose.js';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger/swagger.js';

const app = express();

// Connect to the database
connectToDatabase();

// Middleware to parse JSON requests
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes setup
app.use('/users', userRouter);

app.use('/todo', taskRouter);

app.get('/', (req, res) =>{
  res.send("Welcome!! server is running")
});



// Fallback route for non-existing endpoints
app.use('*', (req, res) => {
  return res.status(404).json({
    error: true,
    message: 'API endpoint not found',
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error(error);
  return res.status(error.status || 500).json({
    error: true,
    message: error.message,
  });
});

export default app;
