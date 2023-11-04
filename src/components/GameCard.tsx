const dummyData = [
  {
    title: "Gears of War",
    description: "Fantasy RPG based on old greek theology",
    released: 2018,
    rating: 4,
  },
  {
    title: "Halo",
    description: "Fantasy FPS set in the future",
    released: 2007,
    rating: 4.5,
  },
  {
    title: "Pokemon",
    description: "Fantasy game based on a popular Japanese manga",
    released: 1999,
    rating: 4.3,
  },
];

export default function GameCard() {
  return (
    <div>
      <ul>
        {dummyData.map((game) => (
          <div key={game.title}>
            <li>{game.title}</li>
            <p>{game.description}</p>
            <li>{game.released}</li>
            <li>{game.rating}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}
