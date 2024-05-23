export function generateDiscountCode(): string {
  // Generate random digits between 4 and 6
  const numDigits = getRandomInt(4, 6);
  // Generate random digits using a loop
  let digits = "";
  for (let i = 0; i < numDigits; i++) {
    // Add random digit (0-9)
    digits = digits + getRandomInt(0, 9).toString();
  }
  const code = `DISCOUNT${digits}`;
  return code;
}

// Generate random digits
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
