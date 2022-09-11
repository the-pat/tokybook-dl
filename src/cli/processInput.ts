import { InvalidOptionArgumentError } from "commander";
import { tokybookNakedDomain } from "const/settings";
/**
 * Process integer inputs.
 *
 * Validation: Will not throw if the input is a number.
 * Sanitization: Floors a floating point number to an integer.
 */
const integer = (value: string): number => {
  const tryParse = (v: string) => {
    try {
      const parsed = parseInt(v, 10);
      return { success: !Number.isNaN(parsed), result: parsed };
    } catch (_) {
      return { success: false };
    }
  };
  const { success, result } = tryParse(value);
  if (!success) throw new InvalidOptionArgumentError("Not a number.");
  return result;
};

/**
 * Process Tokybook URL inputs.
 *
 * Validation: Will not throw if the input is a URL with a Tokybook hostname.
 * Sanitization: Sets the URL hostname to the correct Tokybook naked domain (without subdomain).
 */
const url = (value: string): string => {
  let isValid = true;
  let maybeTokybookUrl: URL;
  try {
    maybeTokybookUrl = new URL(value);
    isValid = /(\w+\.)?tokybook\.com/.test(maybeTokybookUrl.hostname);
  } catch (_) {
    isValid = false;
  }

  if (!isValid)
    throw new InvalidOptionArgumentError("Not a valid Tokybook URL.");

  maybeTokybookUrl.hostname = tokybookNakedDomain;
  return maybeTokybookUrl.toString();
};

/**
 * Processing input entails validation and optional sanitization.
 */
export default { integer, url };
