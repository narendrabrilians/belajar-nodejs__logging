import winston from "winston";

test("logging with transport level", () => {
  const logger = winston.createLogger({
    level: "debug",
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: "di-atas-error-tidak-ada.log",
        level: "error",
      }),
    ],
  });

  logger.error("Error Message");
  logger.warn("Warn Message");
  logger.info("Info Message");
  logger.http("HTTP Message");
  logger.verbose("Verbose Message");
  logger.debug("Debug Message");
  logger.silly("Silly Message");
});
