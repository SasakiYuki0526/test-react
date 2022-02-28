import React ,{useState} from "react";
import PropTypes from "prop-types";

// const(常數):常數不能重複指定值，也不能重複宣告。
const Counter = (props) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>{props.title}</h3>
            <p>count:{props.count}</p>
            <button onClick={() =>props.setCount(props.count+1)}>+</button>
        </div>
    )
}

Counter.prototypes={ // 型別檢查
    count: PropTypes.number,
    setCount: PropTypes.function,
    title: PropTypes.string
}

export default Counter;