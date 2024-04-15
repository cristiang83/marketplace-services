export function ProviderDetail(props) {
  return (
    <div className="container text-center">
      <div className="row align-items-start">
        <div className="col">
          <div>
            <div className="card">
              <figure className="figure">
                <img
                  src="../Imagenes/Elec.jpg"
                  className="figure-img img-fluid rounded"
                  alt="..."
                />
              </figure>
            </div>
            <div>
              <h2>Perico Perez</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          
          <h3>Contactanos</h3>
          <div className="mb-3">
            <label for="name-input" class="form-label">Name</label>
            <input type="text" class="form-control" id="name-input" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
            <br></br>
            <button type="button" class="btn btn-success" id="send-info">
            Send info
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
