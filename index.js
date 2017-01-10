const Koa = require('koa');

const router = require('koa-router')();
const static = require('koa-static');
const cors = require('kcors');

const app = new Koa();

router

.get('/badge/:first/:second/:color', async (ctx, next) => {
  const tmpl = `
<svg xmlns="http://www.w3.org/2000/svg" width="128" height="20"><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="a"><rect width="128" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#a)"><path fill="#555" d="M0 0h67v20H0z"/><path fill="${ctx.params.color}" d="M67 0h61v20H67z"/><path fill="url(#b)" d="M0 0h128v20H0z"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11"><text x="33.5" y="15" fill="#010101" fill-opacity=".3">${ctx.params.first}</text><text x="33.5" y="14">${ctx.params.first}</text><text x="96.5" y="15" fill="#010101" fill-opacity=".3">${ctx.params.second}</text><text x="96.5" y="14">${ctx.params.second}</text></g></svg>`;
  ctx.response.set('Content-Type', 'image/svg+xml');
  ctx.response.set('Vary', 'Accept-Encoding');
  ctx.response.body = tmpl;
  await next();
})

app

.use(cors())

.use(static(`${__dirname}/build`))

.use(router.routes())

.use(router.allowedMethods());

app.listen(process.env.PORT || 3000);
