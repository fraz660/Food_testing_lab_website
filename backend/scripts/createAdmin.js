const mongoose = require('mongoose');
const Admin = require('../models/Admin');
require('dotenv').config();

const createDefaultAdmin = async () => {
  try {
    // Connect to MongoDB
    const mongoURI = process.env.MONGODB_URI;
    
    if (!mongoURI) {
      console.error('❌ MONGODB_URI is missing in .env file!');
      process.exit(1);
    }

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('✅ Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ username: 'gtftlcutm' });
    
    if (existingAdmin) {
      console.log('⚠️ Admin already exists!');
      console.log('👤 Username:', existingAdmin.username);
      console.log('📧 Email:', existingAdmin.email);
      return;
    }

    // Create default admin
    const defaultAdmin = new Admin({
      username: 'gtftlcutm',
      email: 'md@ftl.esse.co.in',
      password: 'GT@Cutm_2025', // This will be hashed automatically by bcrypt
      role: 'super_admin'
    });

    await defaultAdmin.save();

    console.log('');
    console.log('✅ Admin created successfully!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('👤 Username: gtftlcutm');
    console.log('🔑 Password: GT@Cutm_2025');
    console.log('📧 Email: md@ftl.esse.co.in');
    console.log('🛡️  Role: super_admin');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('');
    console.log('🌐 Login at: http://localhost:3000/admin/login');

  } catch (error) {
    console.error('❌ Error creating admin:', error.message);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
    process.exit(0);
  }
};

// Run the script
createDefaultAdmin();
