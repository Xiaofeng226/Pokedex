export default function RandomButton({ action }) {
  function getRandomPokemon() {
    // There are currently 1025 Pokemon in the API
    const randomId = Math.floor(Math.random() * 1025) + 1;
    action(randomId.toString());
  }

  return (
    <button onClick={getRandomPokemon} className="random-btn">
      Random Pokémon
    </button>
  );
}
