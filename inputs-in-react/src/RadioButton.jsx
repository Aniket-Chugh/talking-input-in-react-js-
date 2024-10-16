import { useState } from "react";

function RadioButton() {
   const [selected, setSelected] = useState('option1');

   const HandleInput = (e) => {
    setSelected(e.target.value);
   }

   return (
    <div>
      <h2>Radio Button</h2>

      {/* Option 1 with label */}
      <label>
        <input
          type="radio"
          value="option1"
          checked={selected === 'option1'}
          onChange={HandleInput}
        />
        Option 1
      </label>

      {/* Option 2 with label */}
      <label>
        <input
          type="radio"
          value="option2"
          checked={selected === 'option2'}
          onChange={HandleInput}
        />
        Option 2
      </label>

    </div>
   );
}

export default RadioButton;
