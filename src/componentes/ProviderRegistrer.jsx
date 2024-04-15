export function ProviderRegistrer(props) {
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
            <div className="col">
              <div className="mb-3">
                <label for="name-input" class="form-label">
                  Name
                </label>
                <input type="text" class="form-control" id="name-input" />
              </div>

              <div className="mb-3">
                <label for="lastName-input" class="form-label">
                  Last Name
                </label>
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
              <label for="exampleFormControlTextarea1" className="form-label">
                  Category
                </label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Seleccione la categoria</option>
                <option value="1">Electricista</option>
                <option value="2">Mecanico</option>
                <option value="3">Handyman</option>
              </select>
              <br></br>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Description
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
      </div>
    </div>
  );
}
