import winston from "winston";

test("logging with combine format", () => {
  const logger = winston.createLogger({
    level: "debug",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.json()
    ),
    transports: [new winston.transports.Console({})],
  });

  logger.error("Error Message");
  logger.warn("Warn Message");
  logger.info("Info Message");
  logger.http("HTTP Message");
  logger.verbose("Verbose Message");
  logger.debug("Debug Message");
  logger.silly("Silly Message");
});
