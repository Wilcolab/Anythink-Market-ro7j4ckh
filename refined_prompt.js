/**
 * Converts a given string to camelCase format.
 *
 * @param {string} str - The input string to be converted.
 * @throws {TypeError} Throws an error if the input is not a string.
 * @returns {string} The camelCase version of the input string. 
 *                  Returns an empty string if the input is empty or whitespace-only.
 *
 * @example
 * camelCase('hello world');           // returns 'helloWorld'
 * camelCase('hello_world_foo');       // returns 'helloWorldFoo'
 * camelCase('hello-world-bar');       // returns 'helloWorldBar'
 * camelCase('hello  world  baz');     // returns 'helloWorldBaz'
 * camelCase('hello_world-foo bar');   // returns 'helloWorldFooBar'
 * camelCase('');                      // returns ''
 * camelCase('   ');                   // returns ''
 * 
 * @example
 * // Error handling
 * try {
 *     camelCase(123);
 * } catch (error) {
 *     console.error(error.message);    // Expected a string, but received number
 * }
 */

/**
 * Converts a given string to dot.case format.
 *
 * @param {string} str - The input string to be converted.
 * @throws {TypeError} Throws an error if the input is not a string.
 * @returns {string} The dot.case version of the input string. 
 *                  Returns an empty string if the input is empty or whitespace-only.
 *
 * @example
 * dotCase('hello world');           // returns 'hello.world'
 * dotCase('hello_world_foo');       // returns 'hello.world.foo'
 * dotCase('hello-world-bar');       // returns 'hello.world.bar'
 * dotCase('hello  world  baz');     // returns 'hello.world.baz'
 * dotCase('hello_world-foo bar');   // returns 'hello.world.foo.bar'
 * dotCase('');                      // returns ''
 * dotCase('   ');                   // returns ''
 * 
 * @example
 * // Error handling
 * try {
 *     dotCase(123);
 * } catch (error) {
 *     console.error(error.message);    // Expected a string, but received number
 * }
 */
function camelCase(str) {
    // Error handling for non-string inputs
    if (typeof str !== 'string') {
        throw new TypeError(`Expected a string, but received ${typeof str}`);
    }

    // Handle empty strings or whitespace-only strings
    if (!str.trim()) {
        return '';
    }

    // Split by multiple delimiters (spaces, underscores, hyphens) and filter out empty strings
    const words = str
        .split(/[\s_-]+/)
        .filter((word) => word.length > 0);

    // Convert to camelCase: first word lowercase, rest title-cased
    return words
        .map((word, index) => {
            const lowerWord = word.toLowerCase();
            if (index === 0) {
                return lowerWord;
            }
            return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
        })
        .join('');
}

// Example usage:
console.log(camelCase('hello world'));           // 'helloWorld'
console.log(camelCase('hello_world_foo'));       // 'helloWorldFoo'
console.log(camelCase('hello-world-bar'));       // 'helloWorldBar'
console.log(camelCase('hello  world  baz'));     // 'helloWorldBaz'
console.log(camelCase('hello_world-foo bar'));   // 'helloWorldFooBar'
console.log(camelCase(''));                      // ''
console.log(camelCase('   '));                   // ''

// Error handling:
try {
    camelCase(123);
} catch (error) {
    console.error(error.message);                  // Expected a string, but received number
}

function dotCase(str) {
    // Error handling for non-string inputs
    if (typeof str !== 'string') {
        throw new TypeError(`Expected a string, but received ${typeof str}`);
    }

    // Handle empty strings or whitespace-only strings
    if (!str.trim()) {
        return '';
    }

    // Split by multiple delimiters (spaces, underscores, hyphens) and filter out empty strings
    const words = str
        .split(/[\s_-]+/)
        .filter((word) => word.length > 0);

    // Convert to dot.case: all lowercase, joined by dots
    return words
        .map((word) => word.toLowerCase())
        .join('.');
}

// Example usage:
console.log(dotCase('hello world'));           // 'hello.world'
console.log(dotCase('hello_world_foo'));       // 'hello.world.foo'
console.log(dotCase('hello-world-bar'));       // 'hello.world.bar'
console.log(dotCase('hello  world  baz'));     // 'hello.world.baz'
console.log(dotCase('hello_world-foo bar'));   // 'hello.world.foo.bar'
console.log(dotCase(''));                      // ''
console.log(dotCase('   '));                   // ''

// Error handling:
try {
    dotCase(123);
} catch (error) {
    console.error(error.message);                  // Expected a string, but received number
}
