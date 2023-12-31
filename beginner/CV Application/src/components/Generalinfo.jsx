import { useState } from "react";
import '../styles/GeneralInfo.css'
export function Generalinfo(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [generalState,setGeneral] = useState(false);
    // TODO: change border color of input if phone number character
    function handleInfoState(e){
        (generalState) ? setGeneral(false) : setGeneral(true)
    }
    return (
        <section>
            {(generalState == false) ?
            
               ( <form action="">
                    <label htmlFor="">Name: 
                    <input type="text"  onChange={(e)=> setName(e.target.value)}disabled={generalState}/>
                    </label>
                    <label htmlFor="">Email: 
                    <input type="text"  onChange={(e)=> setEmail(e.target.value)}disabled={generalState}/>
                    </label>
                    <label htmlFor="">Phone: 
                    <input type="number"  onChange={(e)=> setPhone(e.target.value)}disabled={generalState}/>
                    </label>
                    <button type="button" onClick={handleInfoState}>Save</button>
                </form>)
        : (
            <>
          <label>Name: <span>{name}</span></label>
          <label>Email: <span>{email}</span></label>
          <label>Phone: <span>{phone}</span></label>
          <button type="button" onClick={handleInfoState}>Edit</button>
          </>
        ) }
        </section>
    )
}