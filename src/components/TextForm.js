import React, {useState} from 'react'
/*import React, { Component } from 'react'
*/
export default function TextForm(props)  {
  {
    const [text, setText]= useState("");
    const handelUpClick=()=>{
      console.log("Uppercase was clicked"+ text);
      let newText = text.toUpperCase();
      setText(newText);
    }
    const handelOnChange=(event)=>
    {
      console.log("On change");
      setText(event.target.value);
    }
    const handelLoClick= ()=>{
      let newText= text.toLocaleLowerCase();
      setText(newText)
    }
    const handelClearClick= ()=>{
      let newText= ""
      setText(newText)
    }
    const handelSpeak= ()=>{
      let msg=new SpeechSynthesisUtterance();
      msg.text=text;
      window.speechSynthesis.speak(msg);
    }
    return (
      <>
      <div>
     <h2>{props.heading} </h2>  
  <div className="mb-3">
    
    <textarea className="form-control" value={text} onChange={handelOnChange} id="MyBox" rows="8"></textarea>
  </div>
    <button className="btn btn-primary mx-2" onClick={handelUpClick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handelLoClick}>Convert to lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handelClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-2 my-3" onClick={handelSpeak}>Speak</button> </div>
      <div className='container my-3'>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>
          {0.008*text.split(" ").length} Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      </>
    );
  }
}