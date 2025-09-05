# 🚀 Real Estate Management System - Startup Guide

## Quick Start (5 minutes)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Create Environment File
Create a `.env` file in the root directory with:
```env
DB_PATH=mongodb://localhost:27017/real_estate_db
PORT=3000
NODE_ENV=development
```

### Step 3: Start MongoDB
**Windows:**
```bash
net start MongoDB
```

**macOS/Linux:**
```bash
sudo systemctl start mongod
```

### Step 4: Run the Application
```bash
# Development mode (with auto-reload)
npm run dev

# OR Production mode
npm start
```

### Step 5: Access the Application
Open your browser and go to:
```
http://localhost:3000
```

## 🧪 Running Tests

To verify everything is working correctly:
```bash
npm test
```

This will run comprehensive tests for:
- ✅ Database connection
- ✅ Model loading
- ✅ Route configuration
- ✅ Package dependencies
- ✅ View templates
- ✅ Environment configuration

## 🔧 Troubleshooting

### Common Issues:

1. **MongoDB Connection Error**
   - Ensure MongoDB is installed and running
   - Check if port 27017 is available
   - Verify MongoDB service is started

2. **Port Already in Use**
   - Change PORT in `.env` file to 3001 or another port
   - Kill existing process: `npx kill-port 3000`

3. **Module Not Found Errors**
   - Run `npm install` to install dependencies
   - Clear node_modules: `rm -rf node_modules && npm install`

4. **Permission Errors**
   - Run as administrator (Windows)
   - Use `sudo` for Linux/macOS

## 📋 Prerequisites Checklist

- [ ] Node.js (version 14.0.0 or higher)
- [ ] npm (version 6.0.0 or higher)
- [ ] MongoDB (version 4.4 or higher)
- [ ] Git (for cloning)

## 🎯 What You'll See

After successful startup, you should see:
```
🚀 Server started on port 3000
📱 Application running at: http://localhost:3000
🔧 Environment: development
✅ MongoDB Connected Successfully
✅ Database connection established successfully
```

## 🎨 Features Available

- **Dashboard**: Modern, responsive management interface
- **Property Management**: Add, edit, list properties
- **Customer Management**: Manage customer profiles
- **Transaction Tracking**: Monitor financial transactions
- **Registration System**: Handle property registrations
- **Loan Management**: Track loan applications
- **Testimonials**: Customer reviews and feedback
- **Cancellation Handling**: Process cancellations

## 🔐 Default Login

**Owner Login:**
- ID: 9999
- Password: (check the database or records)

## 📞 Support

If you encounter issues:
1. Check the console for error messages
2. Run `npm test` to identify problems
3. Verify MongoDB is running
4. Check all prerequisites are installed

## 🚀 Next Steps

1. **Explore the Dashboard**: Navigate through different sections
2. **Add Sample Data**: Create properties, customers, and transactions
3. **Test Functionality**: Try all CRUD operations
4. **Customize**: Modify views and styling as needed

---

**Happy Coding! 🎉** 