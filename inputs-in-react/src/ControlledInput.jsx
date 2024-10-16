import { useState } from "react";

function ControlledInput() {
   const [value , setValue] = useState("");

   const HandleChange = (obj)=>{
     setValue(obj.target.value);
   };

   return (
<div>

       <input type="text" value={value} onChange={HandleChange} />
       <p>added input : {value}</p>
</div>
    );

}

export default ControlledInput;
