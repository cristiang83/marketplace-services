export function ServiceCard(props) {
  return (
    <div className="d-flex justify-content-around">
      <div className="card text-center mb-3" style={{ width: "18rem" }}>
        <img
          src="../Imagenes/OIG3.jpeg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <a href={"/services/" + props.id} className="btn btn-primary">
            Electricistas
          </a>
        </div>
      </div>
      <div className="card text-center mb-3" style={{ width: "18rem" }}>
        <img
          src="../Imagenes/Plum.jpeg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <a href={"/services/" + props.id} className="btn btn-primary">
            Plomero
          </a>
        </div>
      </div>
      <div className="card text-center mb-3" style={{ width: "18rem" }}>
        <img
          src="../Imagenes/Hand.jpeg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <a href={"/services/" + props.id} className="btn btn-primary">
            Handyman
          </a>
        </div>
      </div>
    </div>
  );
}