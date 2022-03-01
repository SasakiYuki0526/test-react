import React ,{useState,useEffect} from "react";
import PropTypes from "prop-types";

// const(常數):常數不能重複指定值，也不能重複宣告。
const Counter = (props) => {
    const [count, setCount] = useState(0);

    // return (
    //     <div>
    //         <h3>{props.title}</h3>
    //         <p>count:{props.count}</p>
    //         <button onClick={() =>props.setCount(props.count+1)}>+</button>
    //     </div>
    // )
    return (
        <div>
            <p className="countStyle">count: {props.count}</p>
            <button onClick={() =>props.setCount(props.count+1)}>+</button>
        </div>
    )
    // 另一種css寫法 直接寫在要改的部分
    // return ( 
    //     <div>
    //         <p style={{color:'purple', fontSize: '15px'}}>count: {props.count}</p>
    //         <button onClick={() =>props.setCount(props.count+1)}>+</button>
    //     </div>
    // )

    // return ( 
    //     <div>
    //         <p style={countStyle}>count: {props.count}</p>
    //         <button onClick={() =>props.setCount(props.count+1)}>+</button>
    //     </div>
    // )
}

Counter.prototypes={ // 型別檢查
    count: PropTypes.number,
    setCount: PropTypes.function,
    title: PropTypes.string
}

export default Counter;

// const Counter=(props)=>{
//     const [changeTime,setChangetime]=useState(0);

//     useEffect(()=>{
//         props.setState(100)
//         console.log('test1')
//     },[])
//     useEffect(()=>{
//         setChangetime(changeTime+1);
//         console.log('test2')
//     },[props.count])

    // return (
    //     <div>
    //         <p>count:{props.count}</p>
    //         <button onClick={() =>props.setCount(props.count+1)}>+</button>
    //         <p>count 的 prop 被更動了 {changeTime} 次</p>
    //     </div>
    // )
// }

// export default Counter;