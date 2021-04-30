
const { main } = require("./cli");

(async () => {
  try {
    await main();
  } catch (error) {
    console.error(error);
  }
})();
