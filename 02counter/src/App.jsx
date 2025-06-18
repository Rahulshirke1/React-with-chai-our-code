import { useState } from 'react'
import './App.css'

function App() {
    // can be any name , second is function = useState()
    let [counter, setCounter] = useState(15)

    // let counter = 15;

    const addValue = () => {
        // counter = counter + 1 
        setCounter(counter + 1)
        // console.log("clicked", counter)
    }


    const removeValue = () => {
        if (counter > 0) {

            // setCounter(counter + 1)
            setCounter((prevcounter) => prevcounter + 1);
            setCounter((prevcounter) => prevcounter + 1);
            setCounter((prevcounter) => prevcounter + 1);     
            setCounter((prevcounter) => prevcounter + 1);
        } else {
            console.log("It can't be less than zero");
        }
    }

    return (
        <>
            <h1>Chai aur React</h1>
            <h2>Counter value: {counter}</h2>
            <button onClick={addValue}>Add value {counter}</button>
            <br />
            <button onClick={removeValue}>Remove value {counter}</button>
            <p>footer:{counter}</p>
        </>
    );
}

export default App;
