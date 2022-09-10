import pino from "pino";

const stdoutLogger = pino({
  prettyPrint: true,
});

const STDERR_STREAM = 2 as const;
const stderrLogger = pino(
  {
    prettyPrint: true,
  },
  pino.destination(STDERR_STREAM)
);

export type Logger = Pick<pino.Logger, "debug" | "info" | "error"> & {
  level?: "fatal" | "error" | "warn" | "info" | "debug" | "trace";
};

stdoutLogger.error = stderrLogger.error.bind(stderrLogger);

export default stdoutLogger as Logger;
