/**
 * Real Estate Management System - Test Suite
 * Comprehensive testing for all application functionality
 */

const mongoose = require('mongoose');
const express = require('express');

// Test configuration
const TEST_CONFIG = {
    PORT: 3001,
    DB_PATH: 'mongodb://localhost:27017/real_estate_test_db'
};

// Test results tracking
let testResults = {
    passed: 0,
    failed: 0,
    total: 0,
    details: []
};

/**
 * Test Helper Functions
 */
function logTest(testName, passed, error = null) {
    testResults.total++;
    if (passed) {
        testResults.passed++;
        console.log(`✅ PASS: ${testName}`);
    } else {
        testResults.failed++;
        console.log(`❌ FAIL: ${testName}`);
        if (error) {
            console.log(`   Error: ${error.message}`);
        }
    }
    testResults.details.push({
        name: testName,
        passed,
        error: error ? error.message : null
    });
}

function printTestSummary() {
    console.log('\n' + '='.repeat(50));
    console.log('📊 TEST SUMMARY');
    console.log('='.repeat(50));
    console.log(`Total Tests: ${testResults.total}`);
    console.log(`✅ Passed: ${testResults.passed}`);
    console.log(`❌ Failed: ${testResults.failed}`);
    console.log(`📈 Success Rate: ${((testResults.passed / testResults.total) * 100).toFixed(2)}%`);
    
    if (testResults.failed > 0) {
        console.log('\n❌ FAILED TESTS:');
        testResults.details
            .filter(test => !test.passed)
            .forEach(test => {
                console.log(`   - ${test.name}: ${test.error}`);
            });
    }
    
    console.log('\n' + '='.repeat(50));
}

/**
 * Database Connection Tests
 */
async function testDatabaseConnection() {
    try {
        await mongoose.connect(TEST_CONFIG.DB_PATH, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        logTest('Database Connection', true);
        return true;
    } catch (error) {
        logTest('Database Connection', false, error);
        return false;
    }
}

/**
 * Model Tests
 */
async function testModels() {
    const models = [
        'Customer',
        'Property', 
        'Transaction',
        'Registration',
        'Loan',
        'Testimonial',
        'Cancellation',
        'Owner'
    ];
    
    for (const modelName of models) {
        try {
            const model = require(`./models/${modelName.toLowerCase()}`);
            if (model && typeof model === 'function') {
                logTest(`${modelName} Model Loading`, true);
            } else {
                logTest(`${modelName} Model Loading`, false, new Error('Model not found or invalid'));
            }
        } catch (error) {
            logTest(`${modelName} Model Loading`, false, error);
        }
    }
}

/**
 * Route Tests
 */
async function testRoutes() {
    const routes = [
        '/',
        '/owner/login',
        '/owner/home',
        '/customer/login',
        '/customer/register'
    ];
    
    // Note: This would require the app to be running
    // For now, we'll just test route file existence
    const routeFiles = [
        './routes/owner.js',
        './routes/customer.js'
    ];
    
    for (const routeFile of routeFiles) {
        try {
            const route = require(routeFile);
            if (route && typeof route === 'function') {
                logTest(`${routeFile} Route Loading`, true);
            } else {
                logTest(`${routeFile} Route Loading`, false, new Error('Route not found or invalid'));
            }
        } catch (error) {
            logTest(`${routeFile} Route Loading`, false, error);
        }
    }
}

/**
 * Package.json Tests
 */
function testPackageJson() {
    try {
        const packageJson = require('./package.json');
        
        // Test required fields
        const requiredFields = ['name', 'version', 'main', 'scripts', 'dependencies'];
        for (const field of requiredFields) {
            if (packageJson[field]) {
                logTest(`Package.json - ${field} field`, true);
            } else {
                logTest(`Package.json - ${field} field`, false, new Error(`Missing ${field} field`));
            }
        }
        
        // Test dependencies
        const requiredDeps = ['express', 'mongoose', 'express-handlebars', 'body-parser'];
        for (const dep of requiredDeps) {
            if (packageJson.dependencies && packageJson.dependencies[dep]) {
                logTest(`Package.json - ${dep} dependency`, true);
            } else {
                logTest(`Package.json - ${dep} dependency`, false, new Error(`Missing ${dep} dependency`));
            }
        }
        
    } catch (error) {
        logTest('Package.json Loading', false, error);
    }
}

/**
 * View Template Tests
 */
function testViewTemplates() {
    const fs = require('fs');
    const path = require('path');
    
    const requiredTemplates = [
        './views/layout.hbs',
        './views/owner/home.hbs',
        './views/error.hbs'
    ];
    
    for (const template of requiredTemplates) {
        try {
            if (fs.existsSync(template)) {
                const content = fs.readFileSync(template, 'utf8');
                if (content.length > 0) {
                    logTest(`${template} Template`, true);
                } else {
                    logTest(`${template} Template`, false, new Error('Template is empty'));
                }
            } else {
                logTest(`${template} Template`, false, new Error('Template file not found'));
            }
        } catch (error) {
            logTest(`${template} Template`, false, error);
        }
    }
}

/**
 * Environment Configuration Tests
 */
function testEnvironmentConfig() {
    try {
        require('dotenv').config();
        
        // Test if we can access environment variables
        const port = process.env.PORT || 3000;
        const dbPath = process.env.DB_PATH || 'mongodb://localhost:27017/real_estate_db';
        
        if (port && (typeof port === 'string' || typeof port === 'number')) {
            logTest('Environment - PORT configuration', true);
        } else {
            logTest('Environment - PORT configuration', false, new Error('Invalid PORT configuration'));
        }
        
        if (dbPath && dbPath.includes('mongodb')) {
            logTest('Environment - DB_PATH configuration', true);
        } else {
            logTest('Environment - DB_PATH configuration', false, new Error('Invalid DB_PATH configuration'));
        }
        
    } catch (error) {
        logTest('Environment Configuration', false, error);
    }
}

/**
 * Node.js Version Test
 */
function testNodeVersion() {
    const nodeVersion = process.version;
    const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
    
    if (majorVersion >= 14) {
        logTest('Node.js Version (>= 14)', true);
    } else {
        logTest('Node.js Version (>= 14)', false, new Error(`Node.js version ${nodeVersion} is too old. Required: >= 14`));
    }
}

/**
 * Main Test Runner
 */
async function runAllTests() {
    console.log('🧪 Starting Real Estate Management System Tests...\n');
    
    // Run all test categories
    await testDatabaseConnection();
    await testModels();
    await testRoutes();
    testPackageJson();
    testViewTemplates();
    testEnvironmentConfig();
    testNodeVersion();
    
    // Print summary
    printTestSummary();
    
    // Cleanup
    if (mongoose.connection.readyState === 1) {
        await mongoose.connection.close();
    }
    
    // Exit with appropriate code
    process.exit(testResults.failed > 0 ? 1 : 0);
}

// Run tests if this file is executed directly
if (require.main === module) {
    runAllTests().catch(error => {
        console.error('❌ Test runner error:', error);
        process.exit(1);
    });
}

module.exports = {
    runAllTests,
    testResults
}; 