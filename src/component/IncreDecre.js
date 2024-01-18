import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../actions";

function IncreDecre() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state);
  return (
    <>
      <h2 className="App">Redux</h2>
      <h4 className="App">Increment-Decrement Counter</h4>
      <div
        style={{
          textAlign: "center",
          margin: "auto",
          marginTop: "50px",
          backgroundColor: "grey",
          borderRadius: "5px",
          justifyContent: "center",
          display: "flex",
          width: "200px",
          padding: "10px",
        }}
      >
        <button onClick={() => dispatch(decrement())}>-</button>
        <span
          style={{
            fontSize: "24px",
            margin: "0 10px",
            backgroundColor: "white",
            padding: "4px",
          }}
        >
          {counter}
        </span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </>
  );
}

export default IncreDecre;
