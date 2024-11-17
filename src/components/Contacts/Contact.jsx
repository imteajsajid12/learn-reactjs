import  {useParams } from 'react-router-dom';
export const Contact = () => {
    const {id} = useParams();
    return (
        <>
            <div>Contact : {id}</div>
           <div className="contacts">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
           </div>
        </>
    )
}