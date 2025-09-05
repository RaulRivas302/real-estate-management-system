/**
 * Real Estate Management System
 * Main application server file
 * Built with Node.js, Express, and MongoDB
 * 
 * @author Real Estate Management Team
 * @version 2.0.0
 */

// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

// Load environment variables
require('dotenv').config();

// Initialize Express app
const app = express();

// Configure middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up view engine with Handlebars
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs.engine({ 
    extname: 'hbs', 
    defaultLayout: 'layout', 
    layoutsDir: __dirname + '/views/',
    helpers: {
        // Custom helper for formatting currency
        formatCurrency: function(amount) {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(amount);
        },
        // Custom helper for formatting dates
        formatDate: function(date) {
            return new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
    }
}));
app.set('view engine', 'hbs');

// MongoDB Connection Configuration
const connectDB = async () => {
    try {
        // Use environment variable for database connection or default to localhost
        const dbPath = process.env.DB_PATH || 'mongodb://localhost:27017/real_estate_db';
        
        await mongoose.connect(dbPath, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        
        console.log('✅ MongoDB Connected Successfully');
    } catch (error) {
        console.error('❌ MongoDB Connection Error:', error.message);
        process.exit(1);
    }
};

// Initialize database connection
connectDB();

// Database connection event handlers
const db = mongoose.connection;
db.on('error', (error) => {
    console.error('❌ Database connection error:', error);
});
db.once('open', () => {
    console.log('✅ Database connection established successfully');
});

// Home route - Main landing page
app.get("/", function(req, res) {
    res.render("owner/home", {
        title: "Real Estate Management System",
        page: "home"
    });
});

// Import and configure routes
const ownerRoutes = require('./routes/owner');
const customerRoutes = require('./routes/customer');

// Mount routes
app.use('/owner', ownerRoutes);
app.use('/customer', customerRoutes);

// 404 Error Handler
app.use((req, res) => {
    res.status(404).render('error', {
        title: 'Page Not Found',
        message: 'The page you are looking for does not exist.',
        error: {
            status: 404
        }
    });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error('❌ Application Error:', err);
    res.status(500).render('error', {
        title: 'Server Error',
        message: 'Something went wrong on our end. Please try again later.',
        error: {
            status: 500,
            message: process.env.NODE_ENV === 'development' ? err.message : 'Internal Server Error'
        }
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log(`🚀 Server started on port ${PORT}`);
    console.log(`📱 Application running at: http://localhost:${PORT}`);
    console.log(`🔧 Environment: ${process.env.NODE_ENV || 'development'}`);
});
