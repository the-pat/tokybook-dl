import { Command } from "commander";

import settings from "const/settings";

import main from "./main";
import processInput from "./processInput";

const cli = new Command();

cli
  .arguments("[url] [dir]")
  .description(
    "Download an audio book into the supplied directory, using the book located at the supplied url.",
    {
      dir: "Parent directory to save audio books to. Audio book chapters will be downloaded into a directory named by the title of the book.",
      url: "The target https://tokybook.com/:book-name URL.",
    }
  )
  .option("-d, --debug", "Enable debug logging.")
  .option(
    "-l, --limit <number>",
    "Limit the maximum number of tracks that can be downloaded at once.",
    processInput.integer,
    settings.defaults.concurrency
  )
  .action((url, dir, opts) => {
    const sanitizedUrl = processInput.url(url ?? settings.defaults.url);
    const sanitizedDir = dir ?? settings.defaults.directory;

    return main(sanitizedDir, sanitizedUrl, opts);
  });

export default cli;
