import winston from "winston";

test("logging with format", () => {
  const logger = winston.createLogger({
    level: "debug",
    // format: winston.format.json(),
    // format: winston.format.simple(),
    format: winston.format.logstash(),
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

test("logging with printf format", () => {
  const logger = winston.createLogger({
    format: winston.format.printf((log) => {
      return `Date: ${new Date()} => ${log.level} & ${log.message}`;
    }),
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
