import AppClima from "./components/AppClima.jsx";
import ClimaProvider from "./context/ClimaProvider.jsx";
function App() {

  return (
      <ClimaProvider>
        <header>
          <h1>Buscador de Clima</h1>
        </header>
        <AppClima/>
      </ClimaProvider>
  )
}

export default App
