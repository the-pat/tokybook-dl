import { InvalidOptionArgumentError } from 'commander';

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

/**
 * Processing input entails validation and optional sanitization.
 */
export default { integer };
