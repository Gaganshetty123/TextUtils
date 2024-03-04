import React from 'react'

export default function About(props) {
  return (
        <div className="accordion" id="accordionPanelsStayOpenExample" style={props.mode==='light'?{backgroundColor:'white',color:'black'}:{backgroundColor:'grey',color:'white'}}>
            <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={props.mode==='light'?{backgroundColor:'white',color:'black'}:{backgroundColor:'black',color:'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
            <strong>Analyze Your text </strong>
            </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse close">
                <div className="accordion-body" style={props.mode==='light'?{backgroundColor:'white',color:'black'}:{backgroundColor:'grey',color:'white'}}>
                Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                </div>
                </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={props.mode==='light'?{backgroundColor:'white',color:'black'}:{backgroundColor:'black',color:'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        <strong>Free to use </strong>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                        <div className="accordion-body" style={props.mode==='light'?{backgroundColor:'white',color:'black'}:{backgroundColor:'grey',color:'white'}}>
                        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={props.mode==='light'?{backgroundColor:'white',color:'black'}:{backgroundColor:'black',color:'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        <strong>Browser Compatible </strong>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                        <div className="accordion-body" style={props.mode==='light'?{backgroundColor:'white',color:'black'}:{backgroundColor:'grey',color:'white'}}>
                        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.

                        </div>
                        </div>
                    </div>
                    </div>
            
)
}
