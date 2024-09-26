// src/helpers/helpers.js

/**
 * Truncates a string to a specified length and appends ellipsis if necessary.
 *
 * @param {string} str - The string to be truncated.
 * @param {number} maxLength - The maximum length of the string.
 * @returns {string} - The truncated string with ellipsis if it exceeds maxLength.
 */
export const truncate = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "..."; // Append ellipsis if truncated
    }
    return str; // Return original string if not truncated
  };
  