//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card( props ) {

  const {id, name} = props;

  return (
    <div className="card_info">
      <h2 className="card_data">Id ingresado: <span>{id}</span> </h2>
      <h2 className="card_data">Nombre Ingresado: <span>{name}</span></h2>
    </div>
  );
}

export default Card;
