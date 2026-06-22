const http = require('http');
const Redis = require('ioredis');

const PORT = process.env.PORT || 3001;
const redis = new Redis({
  host: process.env.REDIS_HOST || 'cache',
  port: process.env.REDIS_PORT || 6379
});

redis.on('connect', () => console.log('✓ Connecté à Redis (Cache)'));
redis.on('error', (err) => console.error('✗ Erreur Redis :', err.message));

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'GET' && req.url === '/health') {
    res.writeHead(200);
    res.end(JSON.stringify({ status: "ok", cache: "connected" }));
    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: "Route introuvable" }));
});

server.listen(PORT, () => {
  console.log(`API TaskFlow démarrée sur le port ${PORT}`);
});
