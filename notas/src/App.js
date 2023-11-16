import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <div class="container text-center">
        <h1>Aplicación de Notas</h1>
      </div>

      <div class="container mt-3">
        <div class="row row-cols-2 border">
          <div class="col-2 border">
            Buscador
          </div>

          <div class="col-2">
            <input type="text" class="form-control" placeholder="Buscar"/>
          </div>
        </div>
      </div>
    
      <div class="container mt-3 text-center">
        <h1>Insertar Nota</h1>
      </div>

        <div class="container mt-3">
          <div class="row row-cols-2 border">

            <div class="col-2 border">
              Titulo
            </div>

            <div class="col-2">
              <input type="text" class="form-control" placeholder="Titulo"/>
            </div>
            
          </div>

          <div class="container mt-3">
            <input type="text" class="form-control" placeholder="Contenido"/>
          </div>

          <button type="button" class="btn btn-primary mt-3">Guardar</button>

      </div>



    </div>
  );
}

export default App;
