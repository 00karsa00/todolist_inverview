
/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with the given details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: karthick
 *               email:
 *                 type: string
 *                 format: email
 *                 example: ka7@gmail.com
 *               password:
 *                 type: string
 *                 example: 123
 *               phone:
 *                 type: string
 *                 example: 76875t8658
 *               address:
 *                 type: string
 *                 example: address line 1
 *             required:
 *               - name
 *               - email
 *               - password
 *               - phone
 *               - address
 *     responses:
 *       200:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: User registered successfully
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: User Already exists
 */


/**
 * @swagger
 * /users/{userID}:
 *   get:
 *     summary: Retrieves a user's information
 *     description: Fetch user data by userID
 *     parameters:
 *       - name: userID
 *         in: path
 *         description: ID of the user to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Fetch data successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: fetch data successfully
 *                 userInfo:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: 664d63a27b7c89c4855c113f
 *                     name:
 *                       type: string
 *                       example: karthick1
 *                     email:
 *                       type: string
 *                       format: email
 *                       example: ka5@gmail.com
 *                     password:
 *                       type: string
 *                       example: $2b$10$quVgkDqIMTinqqF08/ZUTOb6v8ASd6JNQf6uUZHmwmyEPZ7jfOa.S
 *                     phone:
 *                       type: string
 *                       example: 76875t8658
 *                     address:
 *                       type: string
 *                       example: address line 1
 *                     isDelete:
 *                       type: boolean
 *                       example: false
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: 2024-05-22T03:16:50.036Z
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: 2024-05-22T11:15:56.725Z
 *                     __v:
 *                       type: integer
 *                       example: 0
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Invalid user ID
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: User not found
 */

/**
 * @swagger
 * /users/{userID}:
 *   patch:
 *     summary: Update a user's information
 *     description: Update user data by userID
 *     parameters:
 *       - name: userID
 *         in: path
 *         description: ID of the user to update
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: karthick
 *               phone:
 *                 type: string
 *                 example: 76875t8658
 *               address:
 *                 type: string
 *                 example: address line 1
 *             required:
 *               - name
 *               - phone
 *               - address
 *     responses:
 *       200:
 *         description: Updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Updated successfully
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Invalid data or user ID
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: User not found
 */

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: User login
 *     description: Login user with email and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: ka5@gmail.com
 *               password:
 *                 type: string
 *                 example: 123
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Login Successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Login Successfully
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjRkZDFlODAzMjAxMjVhOTQzY2E2MGQiLCJlbWFpbCI6ImthN0BnbWFpbC5jb20iLCJpYXQiOjE3MTY0NzAxMDh9.0lVHxaiMaY04u2mN0cEOUeMsOgHHtcmUbu3zfLParps
 *       400:
 *         description: Email is not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: email is not found
 */




