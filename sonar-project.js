const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: 'http://localhost:9000',
    options: {
      'sonar.projectName': 'StockWallet-API',
      'sonar.sources': 'dist',
    },
  },
  () => process.exit()
);
