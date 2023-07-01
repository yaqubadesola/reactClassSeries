import React,{useState} from 'react';

function TestCondition(props) {
    // const [firstName, setFirstName] = useState("")
    // const [surName, setSurName] = useState("")
    // const [email, setEmail] = useState("")
    const students = {firstName : "", surName : "", email:"", gender:null, address: "", country:""}
    const [formData, setFormData] = useState(students)

    const onChangeFormInputs = ({target}) => {
            const {name, value} = target
            setFormData({...formData,[name]:value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if(formData.firstName === ""){
            alert("Firstname Can't be empty")
            return false
        }
        if(formData.surName === ""){
            alert("surName Can't be empty")
            return false
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name='firstName'
                    value={formData.firstName || ""}
                    onChange={(e) => onChangeFormInputs(e)}
                /><br/><br/>
                 <input 
                    type="text"
                    name='surName'
                    value={formData.surName || ""}
                    onChange={(e) => onChangeFormInputs(e)}
                /><br/><br/>
                 <input 
                    type="email"
                    name='email'
                    value={formData.email || ""}
                    onChange={(e) => onChangeFormInputs(e)} 
                /><br/><br/>
                <h4>Gender
                 <input 
                    type="radio"
                    name='gender'
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={(e) => onChangeFormInputs(e)} 
                />&nbsp;
                <input 
                    type="radio"
                    name='gender'
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={(e) => onChangeFormInputs(e)} 
                /></h4><br/>
                <textarea name='address' onChange={(e) => onChangeFormInputs(e)} rows="4" cols="50">
                    {formData.address}
                </textarea>
                <br/>
                <select name='country' value={formData.country} onChange={(e) => onChangeFormInputs(e)}>
                    <option value="">Select Country</option>
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                </select>
                <h1>{formData.firstName}</h1>
                <h1>{formData.surName}</h1>
                <h1>{formData.email}</h1>
                <h1>{formData.gender}</h1>
                <h1>{formData.address}</h1>
                <h1>{formData.country}</h1>

                <input type="submit" value="SAVE"/>
            </form>
          
        </div>
    );
}

export default TestCondition;