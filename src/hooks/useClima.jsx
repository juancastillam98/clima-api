import {useContext} from "react";
import {ClimaContext} from "../context/ClimaProvider.jsx";
export default function useClima(){
    return useContext(ClimaContext)
}