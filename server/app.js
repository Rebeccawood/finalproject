require("dotenv").config();

const express = require("express");
const app = express();

require("./configs/mongoose.config");
require("./configs/debugger.config");
require("./configs/passport.config");
require("./configs/middlewares.config")(app);
require("./configs/view-engine.config")(app);
require("./configs/locals.config")(app);
require("./configs/session.config")(app);

app.use("/", require("./routes/index.routes"));
app.use("/auth", require("./routes/auth.routes"));
app.use("/api/profile", require("./routes/profile.routes"));
app.use("/api/files", require("./routes/files.routes"));
app.use("/api/matches", require("./routes/matches.routes"));

module.exports = app;
