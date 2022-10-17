import React, {useState} from 'react';
import {IoIosDoneAll} from "react-icons/io"
import axios from "axios";


const CreateUserAccount = () => {

    const URL = process.env.REACT_APP_API_BASE_URL

    console.log(URL)

    const [newUser, setNewUser] = useState(
        {
            fName: null,
            lName: null,
            email: null,
            password: null,
            confirmPassword: null
        }
    );
    const [isPasswordMatched, setIsPasswordMatched] = useState(null)

    /* ------------- Handlers ----------- */

    const handleChangeFirstName = (e) => {
        e.preventDefault()
        setNewUser({...newUser, fName: e.target.value});
    }

    const handleChangeLastName = (e) => {
        e.preventDefault()
        setNewUser({...newUser, lName: e.target.value})
    }

    const handleChaneEmail = (e) => {
        e.preventDefault()
        setNewUser({...newUser, email: e.target.value})
    }


    const handleChangePassword = (e) => {
        e.preventDefault()
        setNewUser({...newUser, password: e.target.value})
    }

    const handleChangeConfirmPassword = (e) => {
        e.preventDefault()
        if (newUser.password === e.target.value) {
            setIsPasswordMatched(true)
            setNewUser({...newUser, confirmPassword: e.target.value})
        } else {
            setIsPasswordMatched(false)
        }
    }

    const handleClickRegisterButton = (e) => {
        e.preventDefault()
        console.log(newUser)
        handleUserRegistration();
    }


    /* ------------- API calls ------------------ */

    const handleUserRegistration = (e) => {
        // e.preventDefault()



        let payload = {
            fName: newUser.fName,
            lName: newUser.lName,
            email: newUser.email,
            password: newUser.confirmPassword,
        }


        axios.post(URL+"users/add", payload,{
            headers:{
                "Accept" : "*/*"
            }
            }
        )
            .then((response) => {
              console.log(response.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        //
        // console.log(payload)
    }


    return (
        <div className="bg-primary d-flex justify-content-center py-5 " style={{
            position: "fixed",
            width: "100%",
            height: "100%",
        }}>
            <div className="col-6 bg-white card mx-5 p-2"
                 style={{
                     width: "500px",
                     maxHeight: "500px",
                     position: "fixed"
                 }}
            >
                <div className=" text-uppercase h2 text-center mt-3"
                     style={{
                         fontWeight: "700",
                         color: "#66b3ff"
                     }}>
                    Registration Form
                </div>
                <hr/>
                <form className="px-3 pt-3" style={{
                    fontWeight: "600",
                    color: "gray"
                }}>
                    <div className="row py-3">

                        {/* fName input field */}
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" className="form-control" id="firstName"
                                       aria-describedby="firstName"
                                       placeholder="First Name"
                                       onChange={handleChangeFirstName}
                                />
                            </div>
                        </div>

                        {/* lName input field */}
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" className="form-control" id="lastName"
                                       aria-describedby="lastName"
                                       placeholder="Last Name"
                                       onChange={handleChangeLastName}
                                />

                            </div>
                        </div>
                    </div>

                    <div className="row py-3">
                        {/* fName input field */}
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input type="email" className="form-control" id="email"
                                       aria-describedby="email"
                                       placeholder="E-mail "
                                       onChange={handleChaneEmail}
                                />

                            </div>
                        </div>
                    </div>

                    <div className="row py-3">

                        {/* password input field */}
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="firstName"
                                       aria-describedby="password"
                                       placeholder="Password"
                                       onChange={handleChangePassword}
                                />

                            </div>
                        </div>
                        {/* reEnter Password input field */}
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="re-password">Re-enter password</label>
                                <input type="password" className="form-control" id="re-password"
                                       aria-describedby="re-password"
                                       placeholder="Confirm Password"
                                       onChange={handleChangeConfirmPassword}
                                />
                                {newUser.confirmPassword != null ?
                                    <>
                                        {
                                            isPasswordMatched ?
                                                <div className="text-success" style={{
                                                    fontSize: "9px"
                                                }}>
                                                    <IoIosDoneAll/> <span
                                                    style={{fontSize: "9px"}}> password matched .. </span>
                                                </div>
                                                :
                                                <div className="text-danger" style={{
                                                    fontSize: "9px"
                                                }}>
                                                    Password miss matched .. !
                                                </div>
                                        }
                                    </>
                                    :
                                    <div>
                                        {newUser.confirmPassword}
                                    </div>
                                }
                            </div>

                        </div>
                    </div>

                    <div className="row py-3 ">
                        <div className="d-flex justify-content-end">
                            <div className="btn btn-primary px-4"
                                 onClick={
                                     handleClickRegisterButton
                                 }>
                                Register
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateUserAccount;
