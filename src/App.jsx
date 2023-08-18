import { useState } from "react";
import ErrorMsj from "./ErrorMsj";
import Card from "./Card";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [viewCard, setViewCard] = useState(false);

  const checkName = () => {
    return name.length >= 6;
  };

  const checkId = () => {
    return id.length >= 3 && id.trim() !== " ";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    checkName() && checkId() ? setError(false) : setError(true);
    setViewCard(!error);
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
    setError(false);
    setViewCard(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setError(false);
    setViewCard(false);
  };

  return (
    <div className="App">
      <h1>Mascoti Card</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="codigo">ID</label>
        <input
          type="text"
          id="codigo"
          value={id}
          onChange={handleIdChange}
          placeholder="Codigo de mascota"
        />
        <label htmlFor="mascota">Nombre</label>
        <input
          type="text"
          id="mascota"
          value={name}
          onChange={handleNameChange}
          placeholder="Nombre de mascota"
        />

        <button type="submit">Enviar datos</button>
      </form>

      {error && <ErrorMsj />}
      {(viewCard && !error) ? <Card id={id} name={name}/> : <></>}

    </div>
  );
}

export default App;
