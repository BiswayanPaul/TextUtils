import React, { useState } from 'react'

export default function Textform(props) {

    const clearClick = () => {
        // console.log("UppventerCase was clicked" + text);
        let newText = "";
        setText(newText);
    }
    const handleUpClick = () => {
        // console.log("UppventerCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleTitleClick = () => {
        // console.log("UppventerCase was clicked" + text);
        let newText = text.toLowerCase().split(" ");
        for (let i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        }
        newText = newText.join(" ");
        setText(newText);
    }
    const handleLowerClick = () => {
        // console.log("UppventerCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log("Onchange was clicked");
        setText(event.target.value);
    }
    const handleOnCopyToClipboard = (event) => {
        // console.log("Onchange was clicked");
        navigator.clipboard.writeText(text);
    }
    const [text, setText] = useState('');

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleTitleClick}>Convert to Title Case</button>
                <button className="btn btn-primary mx-1" onClick={handleOnCopyToClipboard}>Copy To Clipboard</button>
                <button className="btn btn-primary mx-1" onClick={clearClick}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words & {text.length} Characters</p>
                <p> {0.008 * text.split(" ").length} minutes to read </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>

        </>
    )
}
