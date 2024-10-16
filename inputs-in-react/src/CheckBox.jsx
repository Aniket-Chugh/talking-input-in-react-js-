import { useState } from "react";

function CheckBox() {
    const [checked , Setchecked] = useState(false);


    const HandleChange = (e) =>{
        Setchecked(e.target.checked);

    }

    return (
        <div>
            <h2>
                CheckBox in react
            </h2>
            <input type="checkbox" checked={checked} onChange={HandleChange} />
        </div>
    );


}

export default CheckBox;
