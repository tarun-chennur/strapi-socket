module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  // {
  //   name: 'strapi::cors',
  //   config: {
  //     enabled: true,
  //     headers: '*',
  //     origin: ['http://localhost:8000',]
  //   }
  // },
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
