import Chart from "./Components/Chart";
import Top from "./Components/Top";
import { useState } from "react";

let initialArr = [];
for (let i = 1; i <= 50; i++) {
    initialArr.push(i * 2);
}

export default function App() {
    const [arr, setArr] = useState(initialArr)

    return (
        <div className="App">
            <Top arr={arr} setArr={setArr} />
            <Chart arr={arr} />

        </div>
    );
}


