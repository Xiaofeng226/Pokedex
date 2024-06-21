export default function EvolvedInfo({ name, data }) {
  return !data || !name ? (
    <p></p>
  ) : !data?.evolves_from_species ? (
    <p>{name} did not evolve from any Pokemon</p>
  ) : (
    <div>
      <h3> {name} was evolved from:</h3>
      <ul>{data.evolves_from_species.name}</ul>
    </div>
  );
}
