// Simple static file server using Bun
const PORT = 8000;

Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);
    let filePath = url.pathname === '/' ? '/index.html' : url.pathname;

    // Security: prevent directory traversal
    if (filePath.includes('..')) {
      return new Response('Forbidden', { status: 403 });
    }

    try {
      const file = Bun.file(`.${filePath}`);
      const exists = await file.exists();

      if (!exists) {
        return new Response('Not Found', { status: 404 });
      }

      return new Response(file);
    } catch (error) {
      console.error('Error serving file:', error);
      return new Response('Internal Server Error', { status: 500 });
    }
  },
  error(error) {
    console.error('Server error:', error);
    return new Response('Server Error', { status: 500 });
  },
});

console.log(`🚀 Portfolio server running at http://localhost:${PORT}`);
console.log(`📁 Serving files from: ${import.meta.dir}`);
console.log('Press Ctrl+C to stop');
