// Worker script untuk Cloudflare Pages
export default {
  async fetch(request, env, ctx) {
    // Mendapatkan URL dari request
    const url = new URL(request.url);
    
    try {
      // Coba untuk mengambil aset statis dari Cloudflare Pages
      // Ini akan mencoba mengambil file yang sesuai dengan path
      let response = await env.ASSETS.fetch(request);
      
      // Jika berhasil, kembalikan response
      if (response.status < 400) {
        return response;
      }
      
      // Jika file tidak ditemukan, kembalikan index.html untuk SPA routing
      return await env.ASSETS.fetch(`${url.origin}/index.html`);
    } catch (e) {
      // Jika terjadi error, kembalikan index.html
      return await env.ASSETS.fetch(`${url.origin}/index.html`);
    }
  }
};
