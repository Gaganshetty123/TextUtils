import React,{ useState } from 'react'

export default function TextForm(props) {
    
    const [text,setText]=useState("");
    function handleONChange (event){
        console.log("onchange");
        setText(event.target.value);
    }
    function cngUpperCase()
    {   try{
            let msg=text;
            setText(msg.toUpperCase());
            props.showAlert("Text Converted Into UpperCase","sucess");
            }
            catch(Exception){
                setText("ENTER THE VALID TEXT");
            }
    }
    function cngLowerCase()
    {
        let msg=text;
        setText(msg.toLowerCase());
        props.showAlert("Text Converted Into LowerCase","sucess");
    }
    
    function extSpc() {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
            props.showAlert("Removed Extra Spaces","sucess");
    
        }
        function clrtext(){
            setText("");
            props.showAlert("Text Cleared","sucess");
        }
        function cpytext(){
            navigator.clipboard.writeText(text);
            props.showAlert("Copied to Clipboard","sucess");
        }
    return (
    <>  <div className="contain"style={props.mode==='light'?{backgroundColor:"white",color:"black"}:{backgroundColor:"#062149",color:"white"}}>
                        <h2>{props.heading}</h2>
                        <div className="mb-3">
                            <textarea className="form-control" style={props.mode==='light'?{backgroundColor:"white",color:"black"}:{backgroundColor:"rgb(27 60 110)",color:"white"}}
                                value={text} onChange={handleONChange} id="myBox" rows="8" placeholder='enter your Text here'></textarea>
                        </div>
                        <div className="d-flex justify-content-around">
                        
                        <button type="button" disabled={text.length===0} className="btn btn-secondary btn-normal mx-1 my-1" onClick={cngUpperCase}>Convert To UpperCase</button>
                        <button type="button" disabled={text.length===0} className="btn btn-secondary btn-normal mx-1 my-1" onClick={cngLowerCase}>Convert To LowerCase</button>
                        <button type="button" disabled={text.length===0} className="btn btn-secondary btn-normal mx-1 my-1" onClick={extSpc}>Remove Extra Spaces</button>
                        <button type="button" disabled={text.length===0} className="btn btn-secondary btn-normal mx-1 my-1" onClick={clrtext}>Clear Text</button>
                        <button type="button" disabled={text.length===0} className="btn btn-secondary btn-normal mx-1 my-1" onClick={cpytext}>Copy Text</button>
                        </div>
                        <div className="summary my-3">
                            
                            <p>Words : {text.split(/\s+/).filter((element)=>{return element.length!==0;}).length}   Count : {text.length}</p>
                            <p>Takes {0.008*text.split(" ").filter((element)=>{return element.length!==0;}).length}mins to Read</p>
                            <h2>Preview</h2>
                            <p>{text.length>0?text:"Nothing to preview!"}</p>
                        </div>
        </div>
    </>
    
    )
}
