const mongoose = require('mongoose');
const Admin = require('../models/Admin');
dotenv = require('dotenv').config();

const createDefaultAdmin = async () => {
  try {
    // Connect to MongoDB
    const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://princeaarya10008:FTLcutm%4010008@ftl.njzlo8f.mongodb.net/food_testing_lab?retryWrites=true&w=majority';
    
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ username: 'admin' });
    
    if (existingAdmin) {
      console.log('Default admin already exists!');
      console.log('Username:', existingAdmin.username);
      console.log('Email:', existingAdmin.email);
      return;
    }

    // Create default admin
    const defaultAdmin = new Admin({
      username: 'admin',
      email: 'md@ftl.esse.co.in',
      password: 'GT@Cutm_2025', // This will be hashed automatically
      role: 'super_admin'
    });

    await defaultAdmin.save();

    console.log('✅ Default admin created successfully!');
    console.log('📧 Email: md@ftl.esse.co.in');
    console.log('👤 Username: admin');
    console.log('🔑 Password: admin123');
    console.log('🛡️ Role: super_admin');
    console.log('');
    console.log('⚠️ IMPORTANT: Change the default password after first login!');
    console.log('🌐 Login at: http://localhost:3000/admin/login');

  } catch (error) {
    console.error('❌ Error creating admin:', error.message);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    process.exit(0);
  }
};

// Run the script
createDefaultAdmin();
