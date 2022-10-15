export const tokybookNakedDomain = 'tokybook.com' as const;
const settings = {
  defaults: {
    concurrency: Number.MAX_SAFE_INTEGER,
    directory: '.',
    url: `https://${tokybookNakedDomain}/tales-from-earthsea/`,
  },
} as const;

export default settings;
