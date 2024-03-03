// Cities Program
// Author: [Your Name]
// Date: [Current Date]
// Function to describe a city with an optional country parameter
function describe_city(city, country) {
    if (country === void 0) { country = "Default Country"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Tokyo");
