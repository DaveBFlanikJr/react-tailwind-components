import gameImage from "/game.jpg";

const dummyData = [
  {
    image: gameImage,
    title: "Gears of War",
    description: "Fantasy RPG based on old greek theology",
    released: 2018,
    rating: 4,
  },
  {
    image: gameImage,
    title: "Halo",
    description: "Fantasy FPS set in the future",
    released: 2007,
    rating: 4.5,
  },
  {
    image: gameImage,
    title: "Pokemon",
    description: "Fantasy game based on a popular Japanese manga",
    released: 1999,
    rating: 4.3,
  },
];

export default function GameCard() {
  return (
    <article className="justify-center items-center">
      <ul key="game-list">
        {dummyData.map((game) => (
          <li key={game.title} className="mb-2">
            <img
              src={gameImage}
              alt={game.title}
              className="w-1/4 h-1/4 rounded-full"
            />
            <h3 className="text-xl font-bold">{game.title}</h3>
            <p>{game.description}</p>
            <span className="text-gray-700">Released: {game.released}</span>
            <span className="text-gray-700">Rating: {game.rating}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
