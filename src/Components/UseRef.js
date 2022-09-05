import {useRef} from 'react'

function UseRef() {
  const ref= useRef(null);
  const paraRef= useRef(null);
  const handleSubmit =(e) =>{
    e.preventDefault();
    console.log(ref.current.value)
    paraRef.current.innerHTML=ref.current.value;
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Use Ref Hook Example</h1>
      <div className="inputs">
      <label>Enter your text:</label>
      <input 
        type="text"
        ref={ref}
        placeholder='Enter your name'
        /><br/>
        <input type='submit' value='submit'/>
      </div>
      <h3>OUTPUT 🔽</h3>
      <em ref={paraRef}></em>
    </form>
  )
}

export default UseRef