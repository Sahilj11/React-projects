import { useState } from "react";
import '../styles/GeneralInfo.css'
export function Education(){
    // school name, title of study and date of study)
    const [schoolName,setSchoolName] = useState('');
    const [subject, setSubject] = useState('');
    const [duration, setDuration] = useState('');
    const [generalState,setGeneral] = useState(false);
    
    function handleInfoState(e){
        if(generalState == true){
            setGeneral(false);
            e.target.textContent='Save';
        }else{
            setGeneral(true);
            e.target.textContent='Edit';
        }
    }
    return (
        <section>
            {(generalState == false)? (

            <form action="">
                <label htmlFor="">School Name: 
                <input type="text"  onChange={(e)=> setSchoolName(e.target.value)}disabled={generalState}/>
                </label>
                <label htmlFor="">Subject: 
                <input type="text"  onChange={(e)=> setSubject(e.target.value)}disabled={generalState}/>
                </label>
                <label htmlFor="">Duration: 
                <input type="number"  onChange={(e)=> setDuration(e.target.value)}disabled={generalState}/>
                </label>
                <button type="button" onClick={handleInfoState}>Save</button>
            </form>
            ):(
                <>
                    <label>School Name: <span>{schoolName}</span></label>
                    <label>Subject: <span>{subject}</span></label>
                    <label>Duration: <span>{duration}</span></label>
                    <button type="button" onClick={handleInfoState}>Edit</button>
                </>
            )}
        </section>
    )
}