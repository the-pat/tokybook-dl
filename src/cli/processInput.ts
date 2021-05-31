import { InvalidOptionArgumentError } from 'commander';
import { tokybookOrigin } from 'const/settings';
/**
 * Process integer inputs.
 *
 * Validation: Will not throw if the input is a number.
 * Sanitization: Floors a floating point number to an integer.
 */
const integer = (value: string) => {
  const tryParse = (v: string) => {
    try {
      const parsed = parseInt(v, 10);
      return { success: !Number.isNaN(parsed), result: parsed };
    } catch (_) {
      return { success: false };
    }
  };
  const { success, result } = tryParse(value);
  if (!success) throw new InvalidOptionArgumentError('Not a number.');
  return result;
};

const url = (value: string) => {
  let isValid = true;
  try {
    const maybeTokybookUrl = new URL(value);

    isValid = maybeTokybookUrl.origin === tokybookOrigin;
  } catch (_) {
    isValid = false;
  }
  if (!isValid) throw new InvalidOptionArgumentError('Not a valid Tokybook URL.');

  return value;
};

/**
 * Processing input entails validation and optional sanitization.
 */
export default { integer, url };
