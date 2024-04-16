export function ProviderCard(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="../Imagenes/Elec.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}.</p>
        <a href={"/provider/" + props.id} className="btn btn-primary">
          More Information
        </a>
      </div>
    </div>
  );
}
