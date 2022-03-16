import Button from "./Button"
import {useState} from 'react';
import Axios from "axios";

const Start = () => {

    const url = "https://scapaystart-api-kam5x.ondigitalocean.app/join-us/add/"
    const [data, setData] = useState({
        name:"",
        email:""
    })

    const headers = {
        "Authorization":"Token d00f426f0d233433d70712d4cf20dd7deeaac417",
        "Content-Type":"application/json"
     };
 
     

    function submit(e){
        e.preventDefault();
        Axios.post(url, {
            name: data.name,
            email: data.email
        }, {headers})
        .then(res=>{
                console.log(res.data)
                if (res.data.name === true && res.data.error === false){
                    //notify success
                } else{
                    //notity failure
                }
            })
    }

    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (
    <form className="add-form" onSubmit={(e)=> submit(e)}>
        <div >
            <input onChange={(e)=>handle(e)} value={data.name} id="name" type='text' placeholder="Full Name" className="form-field"/>
        </div>
        <div >
            <input onChange={(e)=>handle(e)} value={data.email} id="email" type='email' placeholder="Email Address" className="form-field" />
        </div>
        <Button color = "#20c744" text="join us"/>
    </form>
    )
}

export default Start