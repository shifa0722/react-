import './App.css'
import Laptop from './components/Laptop'
import Player from './components/Player'


function App() {


  return (
    <>
      <Laptop
        name="del"
        ram="8gb"
        storage="1tb"
        processor="i5"
      />
      <Player
        name="John Doe"
        age="25"
        country="USA"
      />


    </>

  )
}

export default App
