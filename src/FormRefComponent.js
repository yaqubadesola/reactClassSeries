import {useRef} from 'react';

function FormRefComponent(props) {
    let firstNameRef  = useRef("")
    let surNameRef    = useRef("")
    let emailRef      = useRef("")//

    const firstName     = firstNameRef.current.value
    const surName       = surNameRef.current.value
    const email         = emailRef.current.value
    console.log("Firstname ",firstNameRef.current.value)
    return (
        <div>
                <input 
                    type="text"
                    value={firstName}
                    ref={firstNameRef}
                />
                 <input 
                    type="text"                  
                    value={surName}
                    ref={surNameRef}
                />
                 <input 
                    type="email"
                    value={email} 
                    ref={emailRef}
                />
                <h1>{firstName} \ {surName} \ {email}</h1>
        </div>
    );
}

export default FormRefComponent;