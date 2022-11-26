import { React, useState } from 'react';
import Select from 'react-select';
function Dropdown ()
{
    const colors = [
        {
            id: 11,
            label: "AntiqueWhite",
        },
        {
            id: 12,
            label: "DarkMagenta",
        },
        {
            id: 13,
            label: "greenyellow",
        },
        {
            id: 14,
            label: "PaleGoldenRod",
        },
        {
            id: 15,
            label: "MistyRose",
        },
        {
            id: 16,
            label: "aquamarine",
        },
        {
            id: 17,
            label: "MidnightBlue",
        },
        {
            id: 18,
            label: "grey",
        },
        {
            id: 19,
            label: "lavendar",
        },
    ]

    const [color, setColor] = useState("");

    const click = (event) => {
        setColor(event.label);
    }
    return (
        <div class = "body">
            <div className='dropdownWrapper'>
                <style>
                {
                    `.button 
                    {
                    background-color:` + color + ';'
                }
                </style>
                <center>
                <p><p class ="a">Drop</p><p class =" b ">Down</p> <p class="c">color</p></p>
                </center>
                <div class ="asap" className="block">
                    <button className='button'></button>
                </div>
                <br></br>
                <center>
                <div className="dropdownContainer">
                    <Select options={colors} onChange={click} className='select' placeholder="Select your color"></Select>
                </div>
                </center>
            </div>
        </div>

    );
}
export default Dropdown;