import React, { useState } from 'react'

// ControlledComponent는 input의 value를 state로 관리 (제어 컴포넌트)
function ControlledComponent() {

    const [name, setName] = useState("");
    const [essay, setEssay] = useState("Please write an essay about your favorite DOM");
    const [flavor, setFlavor] = useState("coconut");

    function handleChange(event) {
        // name으로 분류
        const name =  event.target.name;
        // type으로 분류
        const type =  event.target.type;
        if(type === 'text'){
            setName(event.target.value);
        }

        if(name === 'essay'){
            setEssay(event.target.value);
        }

        if(name === 'flavor'){
            setFlavor(event.target.value);
        }
    }

    function handleSubmit(event) {
        alert(`name : ${name}, essay : ${essay}, flavor : ${flavor}`);
        event.preventDefault();
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label>
              Name:
              <input name="name" type="text" value={name} onChange={handleChange} />
          </label>
          <br />
          <br />
          <label>
              Essay : 
              <textarea name="essay" value={essay} onChange={handleChange} />
          </label>
          <br />
          <br />
          <label>
          Pick your favorite flavor:
          <select name="flavor" value={flavor} onChange={handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
          <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default ControlledComponent
