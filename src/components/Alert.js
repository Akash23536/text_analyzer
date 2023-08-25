import React from 'react'

export default function Alert(props) {


    const capitalize =(word)=>{                                             // making a capitalize function which convert the alert message into 
        const lower = word.toLowerCase();                                    //  first letter capital and print it!!
        return lower.charAt(0).toUpperCase() + lower.slice(1);

                                                                            //props.alert && - it is a way to write by the comunity
    }                                //{`alert alert-${props.alert.type} alert-dismissible fade show`} -  making a template literal and setting the 
                                     // alert box theme green as per - success keyward as per bootstrap framework
                                    
  return (
    <div style={{height: "50px"}}>

          {  props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
              <strong>  {capitalize(props.alert.type)} </strong> : {props.alert.msg}
        </div>}
    </div>
  )
}
