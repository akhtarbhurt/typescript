//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.



const personNameWithWhitespace: string = "\t \n John Doe \t \n";

// execute the name with whitespace
console.log(`Name with Whitespace: "${personNameWithWhitespace}"`);

// Strip whitespace and execute the name
const strippedPersonName: string = personNameWithWhitespace.trim();
console.log(`Stripped Name: "${strippedPersonName}"`);
