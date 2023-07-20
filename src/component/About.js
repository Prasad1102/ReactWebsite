import React,{useState} from 'react'

export default function About() {

    const [MyStyle, setMyStyle] = useState({
        color : 'black',
        backgroundColor : 'white'
    })

    const [btnText, setbtnText] = useState('Enablae Dark Mode')

    let toggleStyle = ()=>{
        if(MyStyle.color === 'white'){
            setMyStyle({
                color : 'black',
                backgroundColor : 'white'
            })
            setbtnText('Enablae Dark Mode');
        }
        
        else{
            setMyStyle({
                color : 'white',
                backgroundColor : 'black'
            })
            setbtnText('Enablae light Mode');
        }
    }

  return (
    <>
    <div className="container"  style={MyStyle}>
        <h1>Family</h1>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About Prasad Shelke #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={MyStyle}>
        <strong>Prasad DAttatray Shelke is Son of Dattatray Bhagvat Shelke</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        About Dattatray Shelke #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={MyStyle}>
        <strong>Dattatray Shelke is Head Of Shelke Family</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={MyStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        About Shelke #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={MyStyle}>
        <strong>NonScence</strong>
      </div>
    </div>
  </div>
  <div className="container my-3">
  <button className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
  </div>
</div>
    </div>
    
</>
  )
}
