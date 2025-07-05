const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.send('🚀 Deployed via CodeDeploy + ECS Fargate!'));

app.listen(PORT, '0.0.0.0', () => console.log(`App running on port ${PORT}`));
