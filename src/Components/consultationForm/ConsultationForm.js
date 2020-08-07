import React from 'react';

import './ConsultationForm.scss'


class ConsultationForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email:'',
      emailValid:false,
      numberValid:false,
      number:'',
      firstName:'',
      lastName:'',
      consultation:'',
      message:'',
      firstNameRequiredTest:false,
      lastNameRequiredTest:false,
      numberValidRequiredTest:false,
      emailValidRequiredTest:false,
      consultationRequiredTest:false,
      messageRequiredTest:false

    }
    // this.emailOnchange =this.emailOnchange.bind(this)
    // this.mobileOnChange = this.mobileOnChange.bind(this)
  }

  firstName=(e)=>{
    this.setState({
      firstName:e.target.value
    })
  }

  
  lastName=(e)=>{
    this.setState({
      lastName:e.target.value
    })
  }


  emailOnchange=(e)=>{
    console.log("email",e.target.value)
    const email = e.target.value
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (reg.test(e.target.value) === true) {
        this.setState({
          emailValid: true,
            email:email
        });
        console.log("valid email")
    } else {
        this.setState({
          emailValid: false,
            email:email
        });
    }
  }

  mobileOnChange = (e) =>{
    console.log("mobile",e.target.value)
    const number = e.target.value
    const reg = /^[0]?[6789]\d{9}$/;
    if (reg.test(number) === false) {
        this.setState({
          numberValid:false,
          number:number
        });
    } else {
        this.setState({
          numberValid:true,
            number:number
        });
        return true;
    }
  }


  consultationOnchange=(e)=>{
    this.setState({
      consultation:e.target.value
    })
  }
  messageOnchange=(e)=>{
    this.setState({
      consultation:e.target.value
    })
  }

  submit=()=>{
    if(this.state.firstName !== "" && this.state.lastName !== "" && this.state.numberValid && this.state.emailValid && this.state.consultation !== "" && this.state.message !== ""){
      console.log("success")
    }else if (this.state.firstName === ""){
      this.setState({
        firstNameRequiredTest:true
      })
    }else{
      this.setState({
        firstNameRequiredTest:false
      })
    }
     if (this.state.lastName === ""){
      this.setState({
        lastNameRequiredTest:true
      })
    }else{
      this.setState({
        lastNameRequiredTest:false
      })
    }
    if (!this.state.numberValid){
      this.setState({
        numberValidRequiredTest:true
      })
    }else{
      this.setState({
        numberValidRequiredTest:false
      })
    }
    if (!this.state.emailValid){
      this.setState({
        emailValidRequiredTest:true
      })
    }else{
      this.setState({
        emailValidRequiredTest:false
      })
    }
    if (this.state.consultation === ""){
      this.setState({
        consultationRequiredTest:true
      })
    }else{
      this.setState({
        consultationRequiredTest:false
      })
    }
    if (this.state.message === ""){
      this.setState({
        messageRequiredTest:true
      })
    }else{
      this.setState({
        messageRequiredTest:false
      })
    }

  }
 
  render() {
    console.log("numberValid",this.state.numberValid)
    console.log("emailValid",this.state.emailValid)
    // const {getRootProps, getInputProps} = useDropzone()
    return (
      <div className="consultationFormMainContainer">
        <div className="firstCOntainer">
          <div className="firstContainerOne">
            <div className="firstContainerOneOne">Friendly an ddedicated support every steps on the way</div>
            <div className="firstContainerOneTwo">Real peoples are available 24 hours a day , 7days a week to help you with what ever you need </div>
            <div className="firstContainerOneThree">140-2434-454-324</div>
            <div className="firstContainerOneFour">or</div>
            <div className="firstContainerOneFive">check ou t our <u style={{cursor:'pointer'}}>online support center</u></div>
          </div>
        </div>
        <div className="secondContainer">
          <div className="secondContainerHeader">Request a free Cunsulation</div>
          <div className="inputContainerOne">
           <div className="inputContainerOneTwo">
             <input className="input" onChange={this.firstName.bind(this)} type="text" placeholder="First name"/>
             <div className="requiredText" style={this.state.firstNameRequiredTest ? {display:'block'} :{display:'none'}}>is required*</div>
             </div>
           <div className="inputContainerOneTwo"> 
             <input className="input" onChange={this.lastName.bind(this)} type="text" placeholder="Last name"/>
             <div className="requiredText" style={this.state.lastNameRequiredTest ? {display:'block'} :{display:'none'}}>is required*</div>
             </div>
          </div>
          <div className="inputContainerTwo">
            <div className="inputContainerOneTwo">
              <input type="text" onChange={this.emailOnchange.bind(this)} className="input" placeholder="Email"/>
            <div className="requiredText" style={this.state.emailValidRequiredTest ? {display:'block'} :{display:'none'}}>is not valid email*</div>
            </div>
            
           <div className="inputContainerOneTwo">
             <input type="text" onChange={this.mobileOnChange} className="input" placeholder="Phone"/>
             <div className="requiredText" style={this.state.numberValidRequiredTest ? {display:'block'} :{display:'none'}}>is not valid mobile number*</div>
             </div>
          </div>
          <div className="inputContainerThree">
            <input type="text" onChange={this.consultationOnchange.bind(this)}  className="input" placeholder="Inverstment consultation"/>
            <div className="requiredText" style={this.state.consultationRequiredTest ? {display:'block'} :{display:'none'}}>is required*</div>
          </div> 
          <div className="inputContainerFour">
            <input type="text" onChange={this.messageOnchange.bind(this)}  className="input" placeholder="message"/>
            <div className="requiredText" style={this.state.messageRequiredTest ? {display:'block'} :{display:'none'}}>is required*</div>
          </div>
          <div onClick={this.submit} className="submitButton">submit</div>

        </div>
      </div>
    )
  }
}
export default ConsultationForm;