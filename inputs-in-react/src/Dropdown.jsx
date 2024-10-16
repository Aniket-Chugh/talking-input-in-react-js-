import { useState } from "react";

function DropDownReact() {
    const [option,Setoption] = useState('');

    const HandleInput = (e) =>{
        Setoption(e.target.value[0]);
        
    }

    return (



        <select value={option} onChange={HandleInput} >
<option value="option1">option1</option>
<option value="option2">option 2 </option>
    </select>
    );
}

export default DropDownReact;
