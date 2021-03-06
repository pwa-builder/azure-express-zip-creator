import express, { Response, Request } from "express";
import compression from "compression"; // compresses requests
import bodyParser from "body-parser";
// import lusca from "lusca"

// Controllers (route handlers)
import * as apiController from "./controllers/api";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 8000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// security need to add back in
// app.use(lusca.xframe("SAMEORIGIN"));
// app.use(lusca.xssProtection(true));
// app.use((req, res, next) => {
//   next();
// });

/**
 * API examples routes.
 */
app.options("/api", apiController.optionsApi);
app.get("/api", apiController.getApi);
app.post("/api", apiController.postApi);

export default app;
