require('dotenv').config(); // this line is mandatory when you want to read variables from the '.env' file
console.log(
  `I am ${process.env.MY_NAME}, Wilder in ${process.env.MY_CITY}, and i love ${process.env.MY_LANGUAGE}`
);
