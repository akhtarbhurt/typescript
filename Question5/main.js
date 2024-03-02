//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.



var personNameWithWhitespace = "\t \n John Doe \t \n";
// execute the name with whitespace
console.log("Name with Whitespace: \"".concat(personNameWithWhitespace, "\""));
// Strip whitespace and execute the name
var strippedPersonName = personNameWithWhitespace.trim();
console.log("Stripped Name: \"".concat(strippedPersonName, "\""));
