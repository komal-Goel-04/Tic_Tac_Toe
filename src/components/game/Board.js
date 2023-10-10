import React,{useState} from 'react'
import Square from './Square'
import './game.css'
import { Outlet } from 'react-router-dom'
// import circle from '../image/circle.png'
// import cross from '../image/cross.png'
//blue - #19283c
//grey - #1b1c24
//yellow - #fdd663
//light blue - #292d33

function Board() {

    const[state,setState] = useState(Array(9).fill(null))
    const[copy,setCopy] = useState(Array(9).fill(null))
    const[Xturn,setXturn] = useState(true)

    // const[iswinner,setIswinner] = useState(false)
    // const[namewinner,setNamewinner] = useState('')
    // const[isdraw,setIsdraw] = useState(false)


    const handleClick = (index) => {
        // console.log({index})
        // console.log({Xturn})
        const path = [...state]
        path[index] = Xturn ? <div className='element'>X</div> : <div className='element'>O</div>
        
        const duplicate = [...copy]
        duplicate[index] = Xturn ? 'X' : 'O' 
        
        // path[index] = Xturn ? <img className="image" src='${circle}' /> : <img className="image" src='${cross}' />
        setState(path)
        setCopy(duplicate)
        setXturn(!Xturn)
    }

    const checkWinner = () => {
        const winners = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
        for(let index of winners) 
        {
            // console.log('first index ' ,index)
            const [a,b,c] = index
            // console.log('second index ' ,index)
            // if((state[a] != null) && (state[a] === state[b]) && (state[a] === state[c]))
            // {
            //     return copy[a]
            // }

            if((copy[a] != null) && (copy[a] === copy[b]) && (copy[a] === copy[c]))
            {
                return copy[a]
                // setIswinner(true)
                // setNamewinner(copy[a])
            }
        }
        // console.log('rendering done')
        return false
        // setIswinner(false)
    }

    const gamedraw = () => {
        for (let i = 0; i < 9; i++){
            if(state[i] == null)
                // setIsdraw(false)
                return false;
        }

        return true;
        // setIsdraw(true)
    }

    let iswinner = checkWinner()
    let isdraw = gamedraw()

    // setIswinner(checkWinner());
    // setIsdraw(gamedraw());

    // let winner = document.querySelector('.winner');

    // console.log(iswinner)
    // console.log(isdraw)

    const reset = () => {
        // for (let i = 0; i < 9; i++){
            // const path = [...state]
            // state[i] = null;
        // }

        setState(Array(9).fill(null))
        setXturn(true)
        // iswinner = checkWinner()
        // isdraw = gamedraw()

        // console.log(iswinner)

        // if(!iswinner)
        //     winner.innerHTML = ''

        // isdraw = false;
    }


  return (
    // console.log('iswinner')
    // console.log('isdraw')
    <div className='board_container'>
        <div>
            <div className='winner'>{iswinner ? <> '{iswinner}' won the game</> : <></>}</div>
            <div className='gamedraw'>{!iswinner && isdraw  ? <>game draw</> : <></>}</div>


            <div className='row'>
                <Square style={{font_size: '50px',color: '#fdd663'}} value={state[0]} onClick = {() => handleClick(0)} />
                <Square value={state[1]} onClick = {() => handleClick(1)} />
                <Square value={state[2]} onClick = {() => handleClick(2)} />
            </div>
            <div className='row'>
                <Square value={state[3]} onClick = {() => handleClick(3)} />
                <Square value={state[4]} onClick = {() => handleClick(4)} />
                <Square value={state[5]} onClick = {() => handleClick(5)} />
            </div>
            <div className='row'>
                <Square value={state[6]} onClick = {() => handleClick(6)} />
                <Square value={state[7]} onClick = {() => handleClick(7)} />
                <Square value={state[8]} onClick = {() => handleClick(8)} />
            </div>
        </div>

        {/* <div className='resetdiv'><button className='reset' onClick={() => reset()}>Reset</button></div> */}

        <Outlet />
    
    </div>
  )
}

export default Board
