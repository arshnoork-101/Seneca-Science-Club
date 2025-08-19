const { Client } = require('pg');

// Test different connection methods
async function testConnections() {
  const testConfigs = [
    {
      name: 'Standard postgres user',
      config: {
        host: 'localhost',
        port: 5432,
        database: 'seneca_science_club',
        user: 'postgres',
        password: 'ArshSeneca@401'
      }
    },
    {
      name: 'Try without password',
      config: {
        host: 'localhost',
        port: 5432,
        database: 'seneca_science_club',
        user: 'postgres'
      }
    },
    {
      name: 'Try different port (5433)',
      config: {
        host: 'localhost',
        port: 5433,
        database: 'seneca_science_club',
        user: 'postgres',
        password: 'ArshSeneca@401'
      }
    }
  ];

  for (const test of testConfigs) {
    console.log(`\n🔍 Testing: ${test.name}`);
    console.log(`   Config: ${JSON.stringify(test.config, null, 2)}`);
    
    const client = new Client(test.config);
    
    try {
      await client.connect();
      console.log('   ✅ Connection successful!');
      
      // Test query
      const result = await client.query('SELECT version()');
      console.log('   📊 Database version:', result.rows[0].version.split(' ')[0]);
      
      await client.end();
    } catch (err) {
      console.log(`   ❌ Failed: ${err.message}`);
    }
  }
}

console.log('🚀 Testing PostgreSQL connections...\n');
testConnections();
