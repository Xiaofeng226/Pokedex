export default function Info({ name, data }) {
  return !data || !name ? (
    <p></p>
  ) : !data?.sprites || !data?.moves ? (
    <p>No data for {name}</p>
  ) : (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: 20,
      }}
    >
      <div>
        <h2>This is {name}</h2>
        <img
          src={data.sprites.front_default}
          alt="Pokémon info"
          height="300px"
        />
      </div>
      <div>
        <h3>{name} Type's Are:</h3>
        <ul>
          {data.types.map((type, index) => (
            <li key={index}>{type.type.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3> {name} Stats Are:</h3>
        <ul>
          {data.stats.map((stats, index) => (
            <li key={index}>
              {stats.stat.name}: {stats.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
