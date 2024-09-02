import React,{useState, useEffect} from "react";

function Counter(){
    const [count, setCount] = useState(0);
    const [isMounted, setIsMounted] = usestate(true);

    useEffect( () => {
        console.log('ComponentDidMount: Component has mounted');

        return () => {
            console.log('ComponentWillUnmount: Component is about to be removed');
        };
    }, []);

    useEffect( () => {
        console.log('ComponentDidUpdate: Component updated to' , count);

        //Unmount the component after 10 clicks
        if(count >= 10){
            setIsMounted(false);
        }
    }, [count]);

    const increment = () =>{
        setCount(count  + 1);
    };

    if(!isMounted){
        return <h2>Counter has been unmounted after 10 clicks!</h2>;
    }

    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default Counter;
