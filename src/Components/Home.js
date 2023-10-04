import React,{useState} from "react";
import Counter from "./Counter";

const Home = () => {
    const [numberOfCounters, setNumberOfCounters] = useState([1])


  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="mt-5">
        <button type="button" className="btn btn-danger"
                onClick={()=>{setNumberOfCounters(prev=>[...prev,1])}}
        >
          ADD COUNTER
        </button>
        {numberOfCounters.map((item,index)=>{
            return <Counter key={index} index={index} setNumberOfCounters={setNumberOfCounters} numberOfCounters={numberOfCounters}/>
        })}
       
      </div>
    </div>
  );
};

export default Home;
