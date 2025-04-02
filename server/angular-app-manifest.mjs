
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://gabrieltomazini.github.io/Initiative',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Initiative"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9165, hash: 'd6179012b3eb6d0c0d98c50935f28399eca726fe726ae154165674d5c7162b7a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9409, hash: 'a329e0efbc08d1718025bd5679f3598d26da58d469bb15cc0691d9f9eb5ae134', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 93667, hash: '7e516b9b388731182649057d625adf1dc70d780e17d540c59a2868df0837a66d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-R3ROCA6K.css': {size: 359603, hash: 'qV6R5OYjvqw', text: () => import('./assets-chunks/styles-R3ROCA6K_css.mjs').then(m => m.default)}
  },
};
