export const tokybookOrigin = 'https://www.tokybook.com' as const;
const settings = {
  defaults: {
    concurrency: Number.MAX_SAFE_INTEGER,
    directory: '.',
    url: `${tokybookOrigin}/tales-from-earthsea/`,
  },
} as const;

export default settings;
