export default function DataInfo({ name, data }) {
  return !data || !name ? (
    <p></p>
  ) : !data?.egg_groups || !data?.flavor_text_entries ? (
    <p>No data for {name}</p>
  ) : (
    <div style={{ height: "300px", overflow: "scroll" }}>
      <h3> Information about {name} </h3>
      <ul>
        {data.flavor_text_entries.map((flavor_text, index) => (
          <li key={index}>{flavor_text.flavor_text}</li>
        ))}
      </ul>
    </div>
  );
}
