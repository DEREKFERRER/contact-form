import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import successIcon from '../assets/images/icon-success-check.svg';
import './App.css'

function App() {
  const { register, handleSubmit, reset, formState: { errors }} = useForm()

  const onSubmit = (data) => {
    console.log(data)
    if(data){
      toast(
        <>     
        <div>
          <div className="success_icon_message" style={{}}>
            <img src={successIcon} alt="" />
            <p>Message Sent!</p>
          </div>
          <p className="success_text_message">Thanks for completing the form. We'll be in touch soon!</p>
        </div>
        </>
        , {progress: 0, autoClose: 3000, closeButton: false}
      );

      reset({
        firstName: "",
        lastName: "",
        email: "",
        queryType: "",
        message: "",
        checkbox: []
      })
    }
  
  }

  return (
    <>
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Contact Us</h1>
        <div className="fullname"> 
          <div className="form_input">
            <label className="required">First Name </label>
            <input style={{ borderColor: errors.firstName ? "red" : "", outline: errors.firstName ? "none" : ""}} type="text"  {...register("firstName", { required: true })} />
            {errors.firstName?.type === "required" && (
            <p className="alert" role="alert">This field is required</p>)}
          </div>
          <div className="form_input">
            <label className="required">Last Name </label>
            <input style={{borderColor: errors.lastName ? "red" : "", outline: errors.lastName ? "none" : ""}} type="text" {...register("lastName", { required: true})} />
            {errors.lastName?.type === "required" && (
            <p className="alert" role="alert">This field is required</p>)}
          </div>
        </div>
        <div className="form_input">
          <label className="required">Email Address </label>
          <input style={{borderColor: errors.email ? "red"  : "", outline: errors.email ? "none" : ""}} type="email" {...register("email", { required: true})}/>
          {errors.email?.type === "required" && (
          <p className="alert" role="alert">Please enter a valid email address</p>)}
        </div>
       <div className="form_query">
       <label className="required">Query Type </label>
       <div className="container_query">
          <div className="container_input">
          <input 
              id="generalEnquiry"
              type="radio"
              name='generalEnquiry' 
              value="GeneralEnquiry"
              {...register("queryType", { required: true})}/>
              <span className="checkmark_radio"></span>
            <div className="container_label">
              <label htmlFor='generalEnquiry'>
                General Enquiry
              </label>
            </div>
          </div>
          <div className="container_input" >
            <input 
              id="supportRequest"
              type="radio"  
              name='supportRequest'
              value="SupportRequest"
              {...register("queryType", { required: true})}/>
              <span className="checkmark_radio"></span>
            <div className="container_label">
              <label htmlFor='supportRequest'>
                Support Request
              </label>
            </div>
          </div>
        </div>
        {errors.queryType?.type === "required" && (
          <p className="alert" role="alert">Please select a query type</p>)}
       </div>
       <div style={{marginTop: "10px"}}>
        <div className="form_input">
            <label className="required">Message </label>
            <textarea className="text_message " style={{borderColor: errors.message ? "red" : ""}} {...register("message", { required: true})}/>
            {errors.message?.type === "required" && (
              <p className="alert" role="alert">This field is required</p>)}
        </div>
        <div>
          <div className="form_check">
              <label className="required form_check-req" htmlFor="check">
              <input type="checkbox" id="check" name="check"  {...register("checkbox", {required: true}) }/>
              <span className="checkmark_checkbox"></span>
              I consent to being contacted by the team 
              </label>
          </div>
          {errors.checkbox?.type === "required" && (
            <p className="alert" role="alert">To submit this form, please consent to being contacted</p>)}
        </div>
       </div>
        <button 
          type="submit">
          Submit
        </button>
        <ToastContainer 
          position="top-center"
          limit={1}
          className="my-toast-container"
        />
      </form>
    </div>
    </>
  )
}

export default App
