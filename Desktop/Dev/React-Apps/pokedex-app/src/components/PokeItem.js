import React from 'react'

const PokeItem = (props) => {

  let className = 'card-main';

  if (props.tipo === 'electric') {
    className += ' yellow'
  }else if (props.tipo === 'fire') {
    className += ' red'
  } else if (props.tipo === 'water'){
    className += ' blue'
  }else if(props.tipo === 'grass'){
    className += ' green'
  }else{
    className += ' normal'
  }

  return (
    <>
      {props.nombre && (
          <div className={className}>
            <div className="card-img">
              <img src={props.img} alt={props.nombre} />
            </div>
            <p>
              {props.nombre} <br />
              ID: {props.tipo}
            </p>
            <hr />
            <div className="card-items">
              <span>HP {" " + props.hp}</span>
            </div>
          </div>
      )}
    </>
  );
}

export default PokeItem;