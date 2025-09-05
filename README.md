# 🏠 Real Estate Management System

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18.x-blue.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.x-green.svg)](https://mongodb.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.x-purple.svg)](https://getbootstrap.com/)

A modern, comprehensive real estate management system built with Node.js, Express, MongoDB, and Bootstrap 5. This application provides an intuitive interface for real estate agencies to manage properties, customers, transactions, and more.

## ✨ Features

- **🏠 Property Management**: List, update, and manage property inventory
- **👥 Customer Management**: Manage customer profiles and registrations
- **💰 Transaction Tracking**: Monitor all financial transactions and payments
- **📋 Registration System**: Handle property registrations efficiently
- **🏦 Loan Management**: Track loan applications and financing options
- **⭐ Testimonials**: Showcase customer reviews and testimonials
- **❌ Cancellation Handling**: Manage property cancellations and refunds
- **📊 Dashboard Analytics**: Comprehensive management dashboard
- **🎨 Modern UI**: Beautiful, responsive design with Bootstrap 5
- **📱 Mobile Responsive**: Works perfectly on all devices

## 🚀 Quick Start

### Prerequisites

- **Node.js** (version 14.0.0 or higher)
- **npm** (version 6.0.0 or higher)
- **MongoDB** (version 4.4 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Real-Estate-Management-System
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   # MongoDB Connection String
   DB_PATH=mongodb://localhost:27017/real_estate_db
   
   # Server Configuration
   PORT=3000
   NODE_ENV=development
   
   # Application Settings
   APP_NAME=Real Estate Management System
   APP_VERSION=2.0.0
   ```

4. **Start MongoDB**
   
   Make sure MongoDB is running on your system:
   ```bash
   # On Windows
   net start MongoDB
   
   # On macOS/Linux
   sudo systemctl start mongod
   ```

5. **Run the application**
   ```bash
   # Development mode (with auto-reload)
   npm run dev
   
   # Production mode
   npm start
   ```

6. **Access the application**
   
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
Real-Estate-Management-System-using-NodeJS-Express-MongoDB/
├── app.js                 # Main application file
├── package.json           # Dependencies and scripts
├── .env                   # Environment variables
├── controllers/           # Business logic controllers
├── models/               # MongoDB schemas and models
├── routes/               # Express routes
├── views/                # Handlebars templates
│   ├── layout.hbs        # Main layout template
│   ├── owner/            # Owner-specific views
│   └── customer/         # Customer-specific views
├── public/               # Static assets (CSS, JS, images)
└── records/              # JSON data files
```

## 🛠️ Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Frontend**: Bootstrap 5, Handlebars templating
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Inter)
- **Development**: Nodemon for auto-reload

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DB_PATH` | MongoDB connection string | `mongodb://localhost:27017/real_estate_db` |
| `PORT` | Server port | `3000` |
| `NODE_ENV` | Environment mode | `development` |

### Database Setup

The application will automatically create the following collections in MongoDB:
- `customers` - Customer information
- `properties` - Property listings
- `transactions` - Financial transactions
- `registrations` - Property registrations
- `loans` - Loan applications
- `testimonials` - Customer testimonials
- `cancellations` - Cancellation records

## 🎨 UI/UX Improvements

### Version 2.0.0 Updates

- **Modern Design**: Updated to Bootstrap 5 with custom styling
- **Responsive Layout**: Mobile-first responsive design
- **Enhanced Navigation**: Improved navigation with icons and better UX
- **Dashboard Cards**: Beautiful card-based dashboard layout
- **Color Scheme**: Professional color palette with CSS variables
- **Animations**: Smooth hover effects and transitions
- **Typography**: Modern Inter font family
- **Icons**: Font Awesome 6 icons throughout the interface

## 🚀 Available Scripts

```bash
npm start          # Start the application
npm run dev        # Start in development mode with auto-reload
npm install        # Install dependencies
```

## 📊 Features Overview

### Owner Dashboard
- **Property Management**: Add, edit, and manage property listings
- **Customer Management**: View and manage customer information
- **Transaction Tracking**: Monitor all financial transactions
- **Registration System**: Handle property registrations
- **Loan Applications**: Manage loan requests and approvals
- **Testimonials**: Display customer reviews and feedback
- **Cancellation Handling**: Process cancellations and refunds

### Customer Features
- **Property Browsing**: Search and view available properties
- **Registration**: Register for property purchases
- **Loan Information**: Access loan and financing details
- **Transaction History**: View personal transaction records

## 🔒 Security Features

- Input validation and sanitization
- MongoDB injection protection
- Secure session management
- Error handling and logging

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check connection string in `.env` file
   - Verify MongoDB installation

2. **Port Already in Use**
   - Change PORT in `.env` file
   - Kill existing process on port 3000

3. **Module Not Found Errors**
   - Run `npm install` to install dependencies
   - Clear `node_modules` and reinstall

### Development Tips

- Use `npm run dev` for development with auto-reload
- Check console logs for detailed error messages
- Use browser developer tools for frontend debugging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Check the troubleshooting section
- Review the documentation

---

**Built with ❤️ using Node.js, Express, MongoDB, and Bootstrap 5**
