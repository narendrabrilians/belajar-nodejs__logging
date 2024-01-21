import winston from "winston";

const logger = winston.createLogger({
  level: "debug",
  // handleExceptions: true,
  transports: [
    new winston.transports.File({
      handleExceptions: true,
      filename: "exception.log",
    }),
  ],
});

hello();
