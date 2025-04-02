
export default {
  basePath: 'https://gabrieltomazini.github.io/Initiative',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
