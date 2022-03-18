import Button from "./Button"
import {useState} from 'react';
import Axios from "axios";

import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

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

    // changes state of input fields onClick of join us button
    function resetHandle(){
        const newdata = {...data}
        newdata["name"] = ""
        newdata["email"] = ""
        setData(newdata)
        console.log(newdata)
    }


    function submit(e){
        e.preventDefault();
        Axios.post(url, {
            name: data.name,
            email: data.email
        }, {headers})
        .then(res=>{
                console.log(res.data)
                var title = ""
                var message =  ""
                var type = ""
                if (res.data.success === true && res.data.error === false){
                    title = "Congrats!"
                    message =  "Check your email for a Scapay welcome."
                    type = "success"
                } else if(res.data.msg === "email already exists"){
                    title = "OOPS!"
                    message = "It looks like we already have your email address."
                    type = "warning"
                }else if(res.data.msg === "Email is Invalid"){
                title = "OOPS!"
                message = "Invalid email address."
                type = "danger"
                }
                if(res.data.msg !== "serializer error"){
                    Store.addNotification({
                        title: title,
                        message: message,
                        type: type,
                        insert: "top",
                        container: "top-center",
                        animationIn: ["animate__animated", "animate__fadeIn"],
                        animationOut: ["animate__animated", "animate__fadeOut"],
                        dismiss: {
                        duration: 5000,
                        onScreen: true,
                        pauseOnHover: true,
                        showIcon: true
                        }
                    });
                    }
                
                resetHandle()
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
        <Button color = "#20c744" text="join us" />
    </form>
    )
}

export default Start