'use client';

import { useState, useEffect, useId } from 'react';

export default function DashboardPage() {

    const userId = useId();
    const maxCount =3;

    const [count, setCount] = useState(0);

    const [randomNumber, setRandomNumber] = useState(-1);

    function incrementCount() {
        setRandomNumber(Math.ceil(Math.random()*10));
        setCount(count+1);
    }

    useEffect(()=> {

        console.log("Dashboard is mounted");

        return () => {
            console.log("Dashboard is unmounted");
        }

    }, []);


  return (
    <div className='flex flex-col m-5 p-5 border-2 border-green-600 border-solid rounded-md justify-center w-300'>

      <h1>Lucifer's Casino </h1>

        <p className="m-3"> hi user {userId} welcome to Lucky Draw</p>
 
      <div className='flex flex-col m-5 flex-wrap justify-left'>
       <p>{maxCount - count } turns remaining</p>
        <button disabled={count === maxCount} onClick={incrementCount} value="Roll the Dice"> Roll the Dice</button>
          {  count === maxCount && <p> You Have Rolled the Dice 3 times ALready !!!</p>}
      </div>

        <div className='m-5'>
  {count > 0 &&<h3>Today's Lucky Number is {randomNumber}</h3> }

        <p>{ randomNumber % 2 ===0 && <span> Congratulations, You have won the Lucky Draw</span>}</p>
      <p>{ randomNumber > -1 && randomNumber % 2 !==0 && <span> Sorry, You have lost the Lucky Draw, try again </span>}</p>
        </div>
     
    </div>
  );
}
