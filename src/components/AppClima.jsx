import {Formulario} from "./Formulario.jsx";
import {Resultado} from "./Resultado.jsx";
import {Loading} from "./Loading.jsx";
import useClima from "../hooks/useClima.jsx";
export default function AppClima() {
    const {resultado, cargando, noResultado} = useClima();
    return (
        <>
            <main className={"dos-columnas"}>
                <Formulario/>

                {/*SI no hay nada en resultado, no muestra nada*/}
                { cargando ? <Loading /> :
                    resultado?.name ? <Resultado/> :
                        noResultado ? <p>{noResultado}</p>
                    : <p>Selecciona una ciudad y un país</p>}

            </main>
        </>
    )
}