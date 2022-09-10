export const tokybookOrigin = "https://tokybook.com" as const;
const settings = {
  defaults: {
    concurrency: Number.MAX_SAFE_INTEGER,
    directory: ".",
    url: `${tokybookOrigin}/tales-from-earthsea/`,
  },
} as const;

export default settings;
