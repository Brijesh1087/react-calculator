import React,{useState,useEffect} from "react";
import "./Counter.css"
const Counter=()=>{

	let [value,setValue]=useState("")
	let [equels,setEquel]=useState("0")
	let btn = ["/", 1,2,3,"*",4,5,6,"-",7,8,9,"+","00 ",0,"."]
	const showResult=()=>{
		try{
		setEquel(eval(value))
		}catch(err){}
	}
	const btnClick=(a)=>{
		setValue(value += a)
		showResult()
	}
	const clear=()=>{
		setValue("")
		setEquel("0")
	}
	const equel=()=>{
		try{
			setValue(eval(value))
		}catch(err){}
	}
	const pop=()=>{
		const result = value.slice(0,value.length-1)
		setValue(result)
		showResult()
	}

	return(<div className='counter'>
		<div className='container'>
		<input type="text" readOnly placeholder='888888888' value={value} /><br />
		<input type="text" readOnly className='result' placeholder='88888' value={equels} />
		<div className='btn'>
		<button onClick={()=>clear()} className='green'>C</button>
		<button onClick={()=>btnClick("%")} className='green'>%</button>
		<button onClick={()=>pop()} className='fas fa-backspace green'></button>
		{
		btn.map(function(elem, index) {
			return <button key={index     } onClick={()=>btnClick(elem)}>{elem}</button>
		})
	}
	<button onClick={()=>equel()}>=</button>
	</div>
	</div>
	</div>)
}
export default Counter;