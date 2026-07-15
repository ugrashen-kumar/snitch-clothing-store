# Snitch Clone 👕🛍️

A full-stack MERN e-commerce clothing application inspired by Snitch. The platform supports separate authentication for Buyers and Sellers, secure login using Google OAuth and JWT, and product management for sellers.

## 🚀 Features

### Authentication
- Google Sign-In (OAuth)
- JWT Authentication
- Secure Login & Logout
- Role-based Authentication
  - Buyer
  - Seller

### Seller Features
- Seller Registration & Login
- Add Products
- Manage Own Products *(Coming Soon)*
- Update Products *(Coming Soon)*
- Delete Products *(Coming Soon)*

### Buyer Features
- Buyer Registration & Login
- Browse Products *(Coming Soon)*
- Product Details *(Coming Soon)*
- Shopping Cart *(Coming Soon)*
- Checkout *(Coming Soon)*

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- Google OAuth
- bcryptjs

## 📁 Project Structure

```
project-root/
│
├── client/
│   ├── src/
│   ├── public/
│   └── ...
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── ...
│
└── README.md
```

## 🔐 Authentication Flow

- User can login using Google Sign-In.
- JWT token is generated after successful authentication.
- Protected routes are secured using JWT middleware.
- Role-based authorization ensures:
  - Buyers can browse products.
  - Sellers can add and manage their own products.

## 📦 Current Progress

- ✅ Project Setup
- ✅ MongoDB Connection
- ✅ Express Server
- ✅ Google OAuth Authentication
- ✅ JWT Authentication
- ✅ Buyer Login
- ✅ Seller Login
- ✅ Role-based Authorization
- ✅ Seller Product Creation API

## 🚧 Upcoming Features

- Product Listing
- Product Details
- Update/Delete Products
- Shopping Cart
- Wishlist
- Search & Filters
- Checkout
- Order Management
- User Profile
- Image Upload (Cloudinary)
- Responsive UI
- Admin Dashboard

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/ugrashen-kumar/snitch-clothing-store
```

### Install Dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd client
npm install
```

### Environment Variables

Create a `.env` file inside the server folder.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Run Backend

```bash
npm run dev
```

### Run Frontend

```bash
npm run dev
```

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

## 📄 License

This project is created for learning and portfolio purposes only. It is not affiliated with or endorsed by Snitch.