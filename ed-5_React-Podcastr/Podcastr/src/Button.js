
import { use state } from 'react';


export default function Buttons(props) {

    const [counter, setCounter] = useState(1);

function increment() {
    setCounter(counter + 1);
}
    return (
        <span>{counter}</span>
        <button on click={increment}>{props.title}</button>
        <br />
        );
}