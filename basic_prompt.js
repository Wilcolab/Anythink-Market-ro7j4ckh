/**
 * Converts a string to camelCase format.
 * 
 * @param {string} str - The input string to convert
 * @returns {string} The converted camelCase string
 * 
 * @example
 * toCamelCase("Hello and welcome"); // returns "helloAndWelcome"
 * toCamelCase("hello_world_example"); // returns "helloWorldExample"
 * toCamelCase("hello-world-example"); // returns "helloWorldExample"
 */
function toCamelCase(str) {
    return str
        .toLowerCase()
        .split(/[\s\-_]+/)
        .map((word, index) => 
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join("");
}