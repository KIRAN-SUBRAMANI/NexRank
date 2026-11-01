/**
 * Validates an email address format.
 * @param {string} email 
 * @returns {boolean}
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates a phone number format (basic international/national).
 * @param {string} phone 
 * @returns {boolean}
 */
export function isValidPhone(phone) {
  // Allows optional +, digits, spaces, dashes, parentheses
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return phoneRegex.test(phone);
}

/**
 * Validates if a string is not empty.
 * @param {string} value 
 * @returns {boolean}
 */
export function isNotEmpty(value) {
  return value !== undefined && value !== null && value.trim() !== "";
}
