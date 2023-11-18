import useClima from "../hooks/useClima.jsx";
import "../index.css"
export const Resultado = () => {
    const {resultado} = useClima();
    const {name, main} = resultado;
    //grados kelvi
    const kelvin = 273.15
    return (
        <div className={"contenedor clima"}>
            <h2>El clima de {name} es:</h2>
            <p>{parseInt(main.temp - kelvin)} <span>&#2103;</span></p>
            <div className={"temp_min_max"}>
                <p>Min: {parseInt(main.temp_min - kelvin)} <span>&#2103;</span></p>
                <p>Máx: {parseInt(main.temp_max - kelvin)} <span>&#2103;</span></p>
            </div>
        </div>
    )
}