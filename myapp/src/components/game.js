import React,{useState,useRef} from "react";
import "./game.css";
import img1 from "../images/cross.png";
import img2 from "../images/circle.png";

let data=["","","","","","","","",""];

function Game(){

    const[count,setCount]=useState(0);
    const[lock,setLock]=useState(false);
    let titleref=useRef(null);
    let box1=useRef(null);
    let box2=useRef(null);
    let box3=useRef(null);
    let box4=useRef(null);
    let box5=useRef(null);
    let box6=useRef(null);
    let box7=useRef(null);
    let box8=useRef(null);
    let box9=useRef(null);

    let box_arr=[box1,box2,box3,box4,box5,box6,box7,box8,box9];

    const toogle=(e,num)=>{
        if(lock) return 0;
        if(count%2 === 0){
            e.target.innerHTML=`<img src='${img1}'>`;
            data[num]="X";
            setCount(count+1);
        }
        else{
            e.target.innerHTML=`<img src='${img2}'>`;
            data[num]="o";
            setCount(count+1);
        }
        check();
    }

    const check=()=>{
        if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
            won(data[2])
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
            won(data[5])
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
            won(data[8])
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
            won(data[6])
        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
            won(data[7])
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
            won(data[8])
        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
            won(data[8])
        }
        else if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
            won(data[2])
        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
            won(data[6])
        }
    }

    const won = (winner) =>{
        setLock(true);
        if(winner === "X"){
            titleref.current.innerHTML=`<img src=${img1}> won the game`;
        }
        else{
            titleref.current.innerHTML=`<img src=${img2}> won the game`;
        }
    }

    const reset=()=>{
        setLock(false);
        data=["","","","","","","","",""];
        titleref.current.innerHTML="Welcome to Tic Tac Toe Game";
        box_arr.map((ele)=>{
            ele.current.innerHTML="";
        })
    }

    return(
        <div className='container'>
            <h3 className='title' ref={titleref}>Welcome to <span style={{color:'#38fa38'}}>Tic Tac Toe</span> Game</h3>
            <div className="board">
                <div className="row1">
                    <div className="box" ref={box1} onClick={(e)=>{toogle(e,0)}}></div>
                    <div className="box" ref={box2} onClick={(e)=>{toogle(e,1)}}></div>
                    <div className="box" ref={box3}onClick={(e)=>{toogle(e,2)}}></div>
                </div>
                <div className="row2">
                    <div className="box" ref={box4}onClick={(e)=>{toogle(e,3)}}></div>
                    <div className="box" ref={box5}onClick={(e)=>{toogle(e,4)}}></div>
                    <div className="box" ref={box6}onClick={(e)=>{toogle(e,5)}}></div>
                </div>
                <div className="row3">
                    <div className="box" ref={box7}onClick={(e)=>{toogle(e,6)}}></div>
                    <div className="box" ref={box8}onClick={(e)=>{toogle(e,7)}}></div>
                    <div className="box" ref={box9}onClick={(e)=>{toogle(e,8)}}></div>
                </div>
            </div>
            <button className="reset-button" onClick={()=>{reset()}}>Reset</button>
        </div>
    )
}

export default Game;