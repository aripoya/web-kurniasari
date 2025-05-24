export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Fetch static file
    let response = await env.ASSETS.fetch(request);

    // if not found fallback to index.html
    if (response.status === 404 || response.status === 403) {
      const indexRequest = new Request(`${url.origin}/index.html`, request);
      return await env.ASSETS.fetch(indexRequest);
    }

    return response;
  }
}
