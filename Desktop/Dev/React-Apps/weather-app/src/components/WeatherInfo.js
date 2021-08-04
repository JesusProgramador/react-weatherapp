import React from 'react';

const WeatherInfo = (props) => {

    console.log(props);
    return (
        <>
        
        {
            props.ciudad &&//condicional - operador ternario; si el input esta vacio el cuadro de abajo no se dibuja
            <div className="card card-body">
                <p>
                    Ubicación: {props.ciudad}, {props.pais}
                </p>
                <p>
                    Temperatura: {props.temperatura} °C, {props.descripcion}
                </p>
                <p>
                    Humedad: {props.humedad}%
                </p>
            </div>

        }

        </>
    )
}

export default WeatherInfo;