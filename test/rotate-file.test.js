import DailyRotateFile from "winston-daily-rotate-file";
import winston from "winston";

test("logging with daily rotate file", () => {
  const logger = winston.createLogger({
    level: "debug",
    transports: [
      new winston.transports.Console({}),
      new DailyRotateFile({
        filename: "app-%DATE%.log",
        zippedArchive: true,
        maxSize: "1m",
        maxFiles: "14d",
      }),
    ],
  });

  for (let i = 0; i < 100000; i++) {
    logger.info("Info Message");
  }
});
