import React, {useState} from "react";

export default function TextArea(props){
    const {mode, title} = props;

    const [text, setText] = useState("");

    const handleUpperCase = () => {
        let upperText = text.toUpperCase();
        setText(upperText);
    }
    const handleLowerCase = () => {
        let upperText = text.toLowerCase();
        setText(upperText);
    }
    const handleAlterCase = () => {
        let alterText = text.split("").map(char => ((char===char.toUpperCase()) ? char=char.toLowerCase() : char=char.toUpperCase())).join("");
        setText(alterText);
    }
    const handleUpChange = (event) => {
        setText(event.target.value);
    }
    const style = {
        backgroundColor : mode === 'light' ? 'white' : '#3A3B3C',
        color: mode === 'light' ? 'black' : 'white'
    }

    return(
        <div className={`text-${mode === 'light' ? 'black' : 'white'}`}>
            <div className="container">
                <h1>{title}</h1>
                <div className="form-group">
                    <textarea className="form-control" style={style} id="text-area" rows="8" value={text} onChange={handleUpChange}></textarea>
                    <button className="btn btn-primary mx-1 mt-3" onClick={handleUpperCase}>Convert to Uppercase</button>
                    <button className="btn btn-primary mt-3" onClick={handleLowerCase}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-1 mt-3" onClick={handleAlterCase}>Alternate Case</button>
                </div>
            </div>
            <div className="container">
                <h2>Your text summary : </h2>
                <p>{(text.split(" ")).at(-1) === "" ? text.split(" ").length-1 : text.split(" ").length} words. {text.length} characters.</p>
                <p>{text.split(" ").length * (1/125)} minutes read.</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    );
}