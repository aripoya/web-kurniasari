// Worker script untuk Cloudflare Workers
export default {
  async fetch(request, env, ctx) {
    // Mendapatkan URL dari request
    const url = new URL(request.url);
    
    // Menangani permintaan ke aset statis
    if (url.pathname.startsWith('/assets/')) {
      // Meneruskan permintaan ke aset statis
      return env.ASSETS.fetch(request);
    }
    
    // Untuk semua permintaan lain, mengembalikan index.html
    return env.ASSETS.fetch(`${url.origin}/index.html`);
  }
};
