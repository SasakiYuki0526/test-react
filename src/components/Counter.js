import React ,{useState} from "react";

// const(常數):常數不能重複指定值，也不能重複宣告。
const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>count:{count}</p>
            <button onClick={() =>setCount(count+1)}>+</button>
        </div>
    )
}

export default Counter;