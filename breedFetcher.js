const request = require('request');

const breed = process.argv[2];

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log(`Breed '${breed}' not found.`);
    } else {
      const description = data[0].description;
      console.log(description);
    }
  }
});