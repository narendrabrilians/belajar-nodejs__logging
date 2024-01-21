import winston from "winston";

async function callAsync() {
  return Promise.reject("Ups");
}

const logger = winston.createLogger({
  level: "debug",
  // handleExceptions: true,
  // handleRejections: true,

  transports: [
    new winston.transports.File({
      handleExceptions: true,
      handleRejections: true,
      filename: "rejection.log",
    }),
  ],
});

callAsync();
