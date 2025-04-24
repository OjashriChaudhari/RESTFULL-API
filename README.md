This project is a basic RESTful API built using Express.js and MongoDB (via Mongoose). It allows for CRUD operations on a "Product" collection in the database.

# ✅ Key Features:
    -MongoDB Connection: Connects to a MongoDB Atlas cluster using Mongoose.

    -Express Server: Sets up an Express server listening on port 3001.

    -Schema Definition: Defines a Product schema with fields name, price, and category.

# CRUD APIs:

    -GET /get: Fetches all products from the database.

    -POST /post: Creates a new product with data received in the request body.

    -PUT /put/:id: Updates an existing product by ID.

    -DELETE /delete/:id: Deletes a product by ID.

# 🔧 Tools & Technologies:
    -Node.js with Express.js for server-side logic.
    
    -Mongoose for object data modeling (ODM) with MongoDB.
    
    -MongoDB Atlas as the cloud database service.
