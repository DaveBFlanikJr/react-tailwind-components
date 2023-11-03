import API_KEY from "../config/secrets";

console.log(API_KEY);

const url = `https://api.rawg.io/api/games?key=${API_KEY}`;

console.log(url);
