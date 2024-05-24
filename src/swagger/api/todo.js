/**
 * @swagger
 * /todo/create:
 *   post:
 *     summary: Create a new todo
 *     description: Add a new todo item
 *     parameters:
 *       - in: header
 *         name: authorization
 *         required: true
 *         schema:
 *           type: string
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjRkZDFlODAzMjAxMjVhOTQzY2E2MGQiLCJlbWFpbCI6ImthN0BnbWFpbC5jb20iLCJpYXQiOjE3MTY0NzAxMDh9.0lVHxaiMaY04u2mN0cEOUeMsOgHHtcmUbu3zfLParps
 *         description: JWT token for authorization
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Test data low
 *               description:
 *                 type: string
 *                 example: test teate ets low
 *               priority:
 *                 type: string
 *                 example: low
 *               date:
 *                 type: string
 *                 format: date
 *                 example: 2024-10-23
 *             required:
 *               - title
 *               - description
 *               - priority
 *               - date
 *     responses:
 *       200:
 *         description: Added Successfully
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
 *                   example: Added Successfully
 *       401:
 *         description: Unauthorized
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
 *                   example: Unauthorized
 */

/**
 * @swagger
 * /todo/list:
 *   post:
 *     summary: Create a new todo list
 *     description: Create a new todo list with the given details
 *     parameters:
 *       - in: header
 *         name: authorization
 *         description: JWT token for authorization
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
 *               title:
 *                 type: string
 *                 example: Test data low
 *               description:
 *                 type: string
 *                 example: test teate ets low
 *               priority:
 *                 type: array
 *                 items:
 *                   type: string
 *                   enum: [low, medium, high]
 *                 example: [low]
 *               date:
 *                 type: object
 *                 properties:
 *                   to:
 *                     type: string
 *                     format: date
 *                     example: "2024-04-01"
 *                   from:
 *                     type: string
 *                     format: date
 *                     example: "2024-04-01"
 *                 example:
 *                   to: "2024-04-01"
 *                   from: "2024-04-01"
 *               page:
 *                 type: integer
 *                 example: 1
 *               limit:
 *                 type: integer
 *                 example: 10
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
 *                   example: Fetch data successfully.
 *                 list:
 *                   type: array
 *                   items: {}
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
 *                   example: Invalid input data
 */

/**
 * @swagger
 * /todo/{todoId}:
 *   patch:
 *     summary: Update a todo item
 *     description: Update an existing todo item
 *     parameters:
 *       - in: path
 *         name: todoId
 *         required: true
 *         schema:
 *           type: string
 *           example: 664dc707c9ad744f6df67a69
 *       - in: header
 *         name: authorization
 *         required: true
 *         schema:
 *           type: string
 *           example: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjRkZDFlODAzMjAxMjVhOTQzY2E2MGQiLCJlbWFpbCI6ImthN0BnbWFpbC5jb20iLCJpYXQiOjE3MTY0NzAxMDh9.0lVHxaiMaY04u2mN0cEOUeMsOgHHtcmUbu3zfLParps
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Test data medium
 *               description:
 *                 type: string
 *                 example: test teate ets
 *               priority:
 *                 type: string
 *                 example: low
 *               date:
 *                 type: string
 *                 format: date
 *                 example: 2024-10-23
 *     responses:
 *       200:
 *         description: Updated Successfully
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
 *                   example: Updated Successfully
 *       401:
 *         description: Unauthorized
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
 *                   example: Unauthorized
 *     security:
 *       - bearerAuth: []
 */

/**
 * @swagger
 * /todo/complated/{todoId}:
 *   get:
 *     summary: Mark a todo item as completed
 *     description: Mark a todo item as completed by its unique ID
 *     parameters:
 *       - in: path
 *         name: todoId
 *         required: true
 *         schema:
 *           type: string
 *           example: 664f470deacf7b06812fe99b
 *       - in: header
 *         name: authorization
 *         required: true
 *         schema:
 *           type: string
 *           example: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjRkZDFlODAzMjAxMjVhOTQzY2E2MGQiLCJlbWFpbCI6ImthN0BnbWFpbC5jb20iLCJpYXQiOjE3MTY0NzAxMDh9.0lVHxaiMaY04u2mN0cEOUeMsOgHHtcmUbu3zfLParps
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Updated Successfully
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
 *                   example: Updated Successfully
 *       401:
 *         description: Unauthorized
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
 *                   example: Unauthorized
 */

/**
 * @swagger
 * /todo/{todoId}:
 *   delete:
 *     summary: Delete a todo item
 *     description: Delete an existing todo item
 *     parameters:
 *       - in: path
 *         name: todoId
 *         required: true
 *         schema:
 *           type: string
 *           example: 664f41dd024a130be4a0fdf4
 *       - in: header
 *         name: authorization
 *         required: true
 *         schema:
 *           type: string
 *           example: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjRkZDFlODAzMjAxMjVhOTQzY2E2MGQiLCJlbWFpbCI6ImthN0BnbWFpbC5jb20iLCJpYXQiOjE3MTY0NzAxMDh9.0lVHxaiMaY04u2mN0cEOUeMsOgHHtcmUbu3zfLParps
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Deleted Successfully
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
 *                   example: Deleted Successfully
 *       401:
 *         description: Unauthorized
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
 *                   example: Unauthorized
 */