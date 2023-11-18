import {useState, createContext} from "react";
import axios from "axios";
export const ClimaContext = createContext()
export default function ClimaProvider({children}) {
    const [busqueda, setBusqueda] = useState({
        ciudad:"",
        pais: ""
    })
    const [resultado, setResultado] = useState({})
    const [cargando, setCarngado] = useState(false)
    const [noResultado, setNoResultado] = useState(false)
    const datosBusqueda = e =>{
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }
    const consultarClima=async datos =>{
        setCarngado(true)
        setNoResultado(false)
        try {
            const {ciudad, pais} = datos;
            const appId=import.meta.env.VITE_API_KEY
            const url=`http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`;
            const {data} = await axios(url)
            const {lat, lon} = data[0]
            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
            const {data: clima}=await axios(urlClima)//estoy renombrando data por clima
            setResultado(clima)
        }catch (error){
            setNoResultado("No hay resultado")
        }finally {
            setCarngado(false)
        }
    }
    return (
        <ClimaContext.Provider
            value={{busqueda, datosBusqueda, consultarClima, resultado, cargando, noResultado}}
        >
            {children}
        </ClimaContext.Provider>
    )
}
