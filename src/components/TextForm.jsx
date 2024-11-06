import React, {useState} from "react";  // useState is a hook

export default function TextForm(props) {

  const [text, setTest] = useState('');  // this is the current state
  
  const convertupper = () => {                        // convert to uppercase by changing the state
    const newtext = text.toUpperCase();
    setTest(newtext);               // used to change the state, to change the text
    props.showState('success', 'Converted to upper case')
  }

  const convertlower = () => {                        // convert to uppercase by changing the state
    const newtext = text.toLowerCase();
    setTest(newtext);               // used to change the state, to change the text
    props.showState('success', 'Converted to lower case')
  }

  const clearText = () => {
    setTest('');
    props.showState('success', 'Text is cleared')
  }

  const copyText = () => {
    let txt = document.getElementById("box");
    navigator.clipboard.writeText(txt.value);
    props.showState('success', 'Text has been copied to clipboard')
  }

  const handleonchange = (event) => {   
    setTest(event.target.value);   // change the state each time we make change in the current state. 
  }


  return (
    <>
      <div className="mb-3 container my-4" style={{color: props.mode === 'light'?'black':'white'}}>

        <h2>Enter the text below to analyze</h2>
        <textarea 
          style={{backgroundColor: props.mode === 'light'?'white':'#53516e', color: props.mode === 'light'?'black':'white'}}
          className="form-control"
          id="box"
          rows="7"
          value = {text}
          onChange={handleonchange}
        ></textarea>
        <button disabled = {text.length === 0} type="button" className="btn btn-primary my-3" onClick={convertupper}> {props.button}</button>
        <button disabled = {text.length === 0} type="button" className="btn btn-primary my-3 mx-2" onClick={convertlower}> Convert to Lowercase</button>
        <button disabled = {text.length === 0} type="button" className="btn btn-primary my-3 " onClick={clearText}> Clear Text</button>
        <button disabled = {text.length === 0} type="button" className="btn btn-primary my-3 mx-2" onClick={copyText}> Copy Text</button>

      </div>
      
      <div className="container" style={{color: props.mode === 'light'?'black':'white'}}>
        <h3>This is you text summary</h3>
        <p>Number of character - {text.length} and Number of words - {text.split(/\s+/).filter((ele) => {return ele.length !== 0}).length}</p>
        <p>Time required to read - {(0.008 * text.split(" ").filter((ele) => {return ele.length !== 0}).length)} minutes</p>
        <h3>Text Preview</h3>
        <p>{text.length > 0 ? text : "Enter something to preview it here..."}</p>
      </div>
    </>

  );
}
