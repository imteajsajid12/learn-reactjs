
import React from 'react';


const Card = ({title='title', description = 'description'}) => {

    const [count , setCount] = React.useState(0)

    return (
        <>
            <div className="card">
                <img src="https://picsum.photos/200/300" alt="random image" />
                <div className="card-body">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>{count}</p>
                    <button onClick={() => setCount(count ? count + 1 : 1)}>Add +</button>
                    <button onClick={() => setCount( count > 0 ? count - 1 :  0)}>Remove -</button>
                  </div>
                </div>
        </>
    );
}

export default Card;
