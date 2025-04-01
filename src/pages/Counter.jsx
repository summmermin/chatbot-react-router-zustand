import useStore from "../store/useStore";

const Counter = () => {
    const { count, increase, decrease } = useStore();
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    );
};

export default Counter;
