import React , {useState} from 'react'                     

export default function TextForm(props) {                
                                                      
 const [text, setText] = useState('');              
 
 
const handelupClick = () =>{                                                                                  
   let newText = text.toUpperCase();                     
   setText(newText) ; 
   props.showAlert("Text Converted To Uppercase","success")                                       
}

const handeldownClick = () =>{                                      
    let newText = text.toLowerCase();                        
    setText(newText) ;
   props.showAlert("Text Converted To Lowercase","success")
    }

const handelclearClick = () =>{                              
   let newText = "";                        
   setText(newText) ;
   props.showAlert("Text is Clear ","success")                                       
        }
    
const handelCopyClick =()=>{

navigator.clipboard.writeText(text);
// document.getSelection().removeAllRanges();
props.showAlert("Copied to the clipboard","success")
}

const handelRemoveClick =()=> {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra Spaces are removed ","success")

}

const handelonChange = (event) =>{                           // when we are changing the text in the form the onChange() function was run or allow us to change the event
                                                            // on changing the text the variable text state is also changing/updating
    setText(event.target.value)
    }

                                                                  
    

    return (
        <> 
    <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
        <h2 className='mb-4'>{props.Heading}</h2>
<div className="mb-3">
<textarea className="form-control" value = {text} onChange={handelonChange} 
style={{backgroundColor: props.mode ==='dark'?'#13466e':'white' , color: props.mode ==='dark'?'white':'black' }}
 id="exampleFormControlTextarea1"  rows="8">
 </textarea>
</div>
   <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick ={handelupClick}>Convert to Uppercase</button>
   <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick ={handeldownClick}>Convert to Lowercase</button>
   <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick ={handelRemoveClick}>Remove Extra Spaces</button>
   <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick ={handelCopyClick}>Copy Text</button>
   <button disabled={text.length===0} className="btn btn-danger  mx-2  my-2" onClick ={handelclearClick}>Clear Text</button>
    </div> 

<div className="container my-4" style={{color: props.mode ==='dark'?'white':'black'}} >
<h2>Text summery is here:</h2>
<p>  {text.split(/\s+/).filter((Element)=>{return Element.length!==0}).length} Words  and {text.length} Characters</p>
<p> {0.008 * text.split("").filter((Element)=>{return Element.length!==0}).length} Minutes To Read Text</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Nothing to preview!!"}</p>
</div>

    </>
  )
}


//onChange{handelonChange} is a method , made for the onChanged event ,when we add the text in the form  
// when click on uppercase button the handelupclick() funtion is fired
// value = {text}  provide the text inside the form control
// rows = 10 provide the gap between the line or the box vertical space
