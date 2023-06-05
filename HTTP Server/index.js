const Logger = require("./logger");

const logger = new Logger();

logger.on("message", (data) => console.log("Called Listener: ", data));

logger.log("Mariga Bruce!");
logger.log("Brenin Nyaribo !");
logger.log("Brenda Moraa !");
