import React from 'react';



const Backgraound = () => {
   const [color , setColor] = React.useState('red')



    return (
        <div className=' w-full h-screen ' style={{backgroundColor: color}}>
            <div>
                Hello World
                <h1 className="text-green-500 text-5xl font-bold">This is a background</h1>
            </div>
            <div className="fixed flex flex-wrap justify-center bottom-12 gap-2">
                <button className="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setColor('red')}>Red</button>
                <button className="m-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => setColor('green')}>Green</button>
                <button className="m-3 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={() => setColor('yellow')}>Yellow</button>
                <button className="m-3 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" onClick={() => setColor('purple')}>Purple</button>
                <button className="m-3 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded" onClick={() => setColor('pink')}>Pink</button>

            </div>
        </div>
    );
}

export default Backgraound;
