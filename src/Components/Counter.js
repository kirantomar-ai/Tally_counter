import React,{useState} from "react";
import { XCircle ,PlusLg,DashLg, ArrowCounterclockwise } from "react-bootstrap-icons";

const Counter = (props) => {
const [counter, setCounter] = useState(0)
const [counterName, setCounterName] = useState("abc")
const [userCounter, setUserCounter] = useState(parseInt(0))
const [isCounterChangeClicked, setIsCounterChangeClicked] = useState(false)

function IncrementCounter(){
    setCounter(prev=>prev+1)
}
function DecrementCounter(){
    setCounter(prev=>prev-1)
}
function ResetCounter(){
    setCounter(0)
}
function DeleteCounter(index){
    let temp= [...props.numberOfCounters]
    temp.splice(index,1)
    props.setNumberOfCounters([...temp])
}
  return (
    <div>
      <div className="mt-2 p-3 pb-5" style={{ width: "700px", backgroundColor: "grey" }}>
            <div className="d-flex justify-content-center" style={{ fontSize: "30px", padding: "8px" }}>
                <div className="ms-5">
                    {isCounterChangeClicked?
                    <input placeholder={counterName} className="form-control" onChange={(event)=>{setCounterName(event.target.value)}}/>
                    :counterName}
                </div>
                <div className="d-flex justify-content-end flex-grow-1"
                    onClick={()=>{DeleteCounter(props.index)}}
                >
                    <XCircle />
                </div>
            </div>
            <div className="input-group flex-nowrap p-2">
                <input type="text" className="form-control" placeholder={counter} value={counter} aria-label="Username" aria-describedby="addon-wrapping"/>
            </div>
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-light m-2" style={{width:'220px'}}
                        onClick={IncrementCounter}
                >
                    <PlusLg/>
                </button>
                <button type="button" className="btn btn-light m-2" style={{width:'220px'}}
                        onClick={DecrementCounter}
                >
                    <DashLg/>
                </button>
            </div>
            <div>
                <button type="button" className="btn btn-light mt-1" style={{width:'220px'}} onClick={ResetCounter}>
                    <ArrowCounterclockwise/> RESET COUNTER
                </button>
            </div>
            <div className="d-flex justify-content-center" >
                <div className="d-flex justify-content-center m-2" style={{width:'220px'}}>
                    <input type="number" className="form-control " placeholder={userCounter} onChange={(event)=>{setUserCounter(+(event.target.value))}} />
                    <button type="button" className="btn btn-dark " onClick={()=>{setCounter(userCounter)}}
                    >
                        SET
                    </button>
                </div>
            </div>
            <div>
                <button type="button" className="btn btn-success mt-1" style={{width:'220px'}} 
                        onClick={()=>setIsCounterChangeClicked(!isCounterChangeClicked)}>
                     CHANGE COUNTER NAME
                </button>
            </div>        
        </div>
    </div>
  );
}

export default Counter;
