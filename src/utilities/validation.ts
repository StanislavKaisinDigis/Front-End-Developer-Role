// input string must be 10 to 16 characters long, starting with "DISCOUNT",
// and ending with 4 to 6 digits
export function validateDiscountCode(code: string): boolean {
  if (code.length < 10 || code.length > 16) {
    return false;
  }

  if (!code.startsWith("DISCOUNT")) {
    return false; // Must start with "DISCOUNT"
  }

  const digits = code.slice(8); // Extract the digit portion from the end
  return /^\d{4,6}$/.test(digits); // Check for 4 to 6 digits using regex
}
