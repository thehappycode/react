import React, { useState, useEffect } from 'react';

export default function Greeting(props) {
    const name = useFormInput('Mary');
    const surname = useFormInput('Poppins');
    const width = useWindowWidth();
    useDocumentTitle(name.value + ' '+ surname.value);

    return (
        <section>
            <div>
                <label>Name</label>
            </div>
            <div>
                <input {...name} />
            </div>

            <div>
                <label>Surmame</label>
            </div>
            <div>
                <input {...surname}/>
            </div>

            <div>
                <label>Width</label>
            </div>
            <div>
                {width}
            </div>
        </section>
    );
}

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    function handleChange(e) {
        setValue(e.target.value);
    }
    return {
        value,
        onChange:handleChange
    };
}

function useDocumentTitle(title) {
    useEffect(() =>{
        document.title = title;
    });
}

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handlerResize = () => setWidth(window.innerWidth);
            window.addEventListener('resize', handlerResize);
            return () => {
                window.removeEventListener('resize', handlerResize);
            }
        });
    return width;    
}