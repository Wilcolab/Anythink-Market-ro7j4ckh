/**
 * Converts a string to kebab-case.
 * 
 * @param {string} str - The input string to convert.
 * @returns {string} - The kebab-case version of the input string.
 * @throws {Error} - Throws an error if the input is not a string.
 * 
 * @example
 * toKebabCase("Hello World") // "hello-world"
 * toKebabCase("This_is_a_test") // "this-is-a-test"
 * toKebabCase("Multiple   spaces") // "multiple-spaces"
 */
function toKebabCase(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }

    // Replace underscores and spaces with hyphens, collapse multiple hyphens, and convert to lowercase
    return str
        .replace(/[_\s]+/g, '-') // Replace underscores and spaces with hyphens
        .replace(/-+/g, '-') // Collapse multiple hyphens into one
        .replace(/[^a-zA-Z0-9-]/g, '') // Remove non-alphanumeric characters except hyphens
        .replace(/^-+|-+$/g, '') // Trim leading and trailing hyphens
        .toLowerCase(); // Convert to lowercase
}

// Example usage
console.log(toKebabCase("Hello World")); // "hello-world"
console.log(toKebabCase("This_is_a_test")); // "this-is-a-test"
console.log(toKebabCase("Multiple   spaces")); // "multiple-spaces"