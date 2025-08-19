const { Client } = require('pg');

// Test database connection
async function testConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5433,
    database: 'seneca_science_club',
    user: 'postgres',
    password: 'ArshSeneca@401' // Replace this with your actual password
  });

  try {
    await client.connect();
    console.log('✅ Database connection successful!');
    
    // Test a simple query
    const result = await client.query('SELECT NOW()');
    console.log('✅ Database query successful:', result.rows[0]);
    
    await client.end();
  } catch (err) {
    console.error('❌ Database connection failed:', err.message);
    console.log('\n🔧 Troubleshooting tips:');
    console.log('1. Make sure PostgreSQL is running');
    console.log('2. Check if the password is correct');
    console.log('3. Verify the database "seneca_science_club" exists');
    console.log('4. Make sure port 5432 is not blocked');
  }
}

testConnection();
