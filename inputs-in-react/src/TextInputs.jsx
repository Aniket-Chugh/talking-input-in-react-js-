import { useState } from "react";

function TextInputs() {
    const [value,Setvalue] = useState("");

    const HandleInput = (e)=>{
        Setvalue(e.target.value);
    }


    return (

        <div>


        <input type="text" value={value} onChange={HandleInput} />
        <p>your text : {value}</p>
        </div>
    );
}
