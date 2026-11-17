const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;
const dailyAccesses = new Map();
const pageAccesses = new Map();
const trackedPages = new Set([
  '/',
  '/index.html',
  '/lk.html',
  '/ap.html',
  '/apresentacao.html',
  '/ext.html',
  '/docs/index-old.html',
  '/docs/index3.html'
]);
let totalAccesses = 0;
const startedAt = Date.now();

app.use((req, res, next) => {
  const isPageRequest = req.method === 'GET' && trackedPages.has(req.path);

  if (isPageRequest) {
    const today = new Date().toISOString().slice(0, 10);
    const page = req.path === '/' ? '/index.html' : req.path;

    totalAccesses += 1;
    dailyAccesses.set(today, (dailyAccesses.get(today) || 0) + 1);
    pageAccesses.set(page, (pageAccesses.get(page) || 0) + 1);

    const oldestDate = new Date();
    oldestDate.setUTCDate(oldestDate.getUTCDate() - 29);
    const cutoff = oldestDate.toISOString().slice(0, 10);
    for (const date of dailyAccesses.keys()) {
      if (date < cutoff) dailyAccesses.delete(date);
    }
  }

  next();
});

app.get('/api/stats', (req, res) => {
  const today = new Date().toISOString().slice(0, 10);
  const daily = Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setUTCHours(0, 0, 0, 0);
    date.setUTCDate(date.getUTCDate() - (6 - index));
    const key = date.toISOString().slice(0, 10);
    return { date: key, count: dailyAccesses.get(key) || 0 };
  });

  const memory = process.memoryUsage();
  res.set('Cache-Control', 'no-store');
  res.json({
    generatedAt: new Date().toISOString(),
    accesses: {
      total: totalAccesses,
      today: dailyAccesses.get(today) || 0,
      daily,
      pages: Array.from(pageAccesses, ([path, count]) => ({ path, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5)
    },
    server: {
      status: 'online',
      uptimeSeconds: Math.floor((Date.now() - startedAt) / 1000),
      memory: {
        rssBytes: memory.rss,
        heapUsedBytes: memory.heapUsed,
        heapTotalBytes: memory.heapTotal
      }
    }
  });
});

// Serve os arquivos estáticos (HTML, CSS, JS) a partir da pasta atual
app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
