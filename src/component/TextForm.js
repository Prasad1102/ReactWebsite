import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState();
  const convertUpper = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }

  const convertLower = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }

  const convertClear = ()=>{
    let newText = '';
    setText(newText);
  }

  //Function to copy the text from text area
  const convertCopy = ()=>{
    let txt = document.getElementById('MyBox');
    txt.select();
    navigator.clipboard.writeText(txt.value);
  }

  const convertOnChange= (event)=>{
    setText(event.target.value);//i dont know what ....use .....if not .....it give an Error
  }
  return (
    <>
    <div className="mb-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <div className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
            this Web is usefull to convert your text into fully capitalized sentence
        </div>
        <h3>Enter a text</h3>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={convertOnChange} id="MyBox" rows="9" placeholder='Enter Text Here' style={{backgroundColor : props.mode === 'dark' ? '#009900' : 'white',color: props.mode === 'dark' ? 'white' : 'black'}}></textarea>
        </div> 
        <button className="btn btn-primary mx-2" onClick={convertUpper}>Convert UpperCase Text</button>       
        <button className="btn btn-primary mx-2" onClick={convertLower}>Convert LowerCase Text</button>  
        <button className="btn btn-primary mx-2" onClick={convertClear}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={convertCopy}>Copy Text</button>      
    </div>
    {/* <h3>Analyse Text :</h3>
    <p><b>Text Words : </b>{text.split(' ').length-1}</p>
    <p><b>Text Charecters (including spaces) : </b>{text.length}</p>
    <p><b>This text require minimum {(text.split(' ').length-1) * 0.008} Min 
            And Maximum time require to read this text is {(text.split(' ').length-1) * 31.24} Min</b></p>  */}
    </>
  )
}
