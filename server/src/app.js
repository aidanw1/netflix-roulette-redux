const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
// const cors = require("cors");
const cors = require("kcors");
const path = require("path");
const koaSwagger = require("koa2-swagger-ui");
const serve = require("koa-static");

const { parseQuery } = require("./utils");
const swaggerApi = require("./api/swagger.api");
const movieApi = require("./api/movie.api");

const publicPath = path.resolve(__dirname, "../../frontend/dist");
console.log("path is ", publicPath);

const app = new Koa()
  .use(cors())
  .use(serve(publicPath))
  .use(
    koaSwagger({
      routePrefix: "/api-docs",
      swaggerOptions: {
        url: "/swagger.yaml",
      },
    })
  )
  .use(bodyParser())
  .use(parseQuery)
  .use(swaggerApi.routes())
  .use(swaggerApi.allowedMethods())
  .use(movieApi.routes())
  .use(movieApi.allowedMethods());

module.exports = exports = app;
