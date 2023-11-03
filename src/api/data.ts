import API_KEY from "../config/secrets";

console.log(API_KEY);

// rawg URL to access a list of games
const URL = `https://api.rawg.io/api/games?key=${API_KEY}`;

console.log(URL);

export default URL;
