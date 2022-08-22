const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");
const morgan = require("morgan");
const constants = require("./utils/constants");
const middlewares = require("./middlewares");

const app = express();
const port = constants.PORT_NUMBER;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use(constants.RRDMS_CRF_URL_PATH, routes);
app.use(constants.RRDMS_URL_PATH, routes);
app.use(constants.RRDMS_URL_ROOT_PATH, routes);

/* Below functions should always be placed at last */
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
app.listen(port, () =>
	console.log(`cls_tovo_mock_api listening on port ${port}!`)
);
