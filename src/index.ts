#!/usr/bin/env node

import { logger } from "./lib";
import cli from "./cli";

cli.parseAsync().catch((error) => {
  logger.error(error);
  process.exit(1);
});
