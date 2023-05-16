import React, { useState } from 'react';

export default function Contact() {
const [data, setData] =useState(
{
  fullname: "",
  phone: "",
  email:"",
  msg:"",
});

const Inputevent = (event) =>{
  const {name, value}=event.target;
 
  setData((preVal )=> {
    return{
      ...preVal,
      [name] :value,
    }
 
})
}
  const formSubmit = (e) => {
e.preventdefault();
alert(
  `My name is ${data.fullname}.My Message is ${data.msg}`
);

};

  return (
    <div>
      <div className="contact my-5">
        <h1 className="text-center">Contact us</h1>
      </div>
  <div className="container contact_div">
    <div className="row">
      <div className="col-md-6 col-10 mx-auto">
      <form onSubmit={formSubmit}>
      <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Enter Your Name</label>
  <input type="text" className="form-control" value={data.fullname} name="fullname" onChange={Inputevent} placeholder="Enter Your Name"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Enter Your Phone</label>
  <input type="number" className="form-control" value={data.phone} name="phone" onChange={Inputevent} placeholder="Mobile number"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Enter Your Email</label>
  <input type="Email" className="form-control" value={data.email} name="email" onChange={Inputevent} placeholder="Enter Your Email"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" value={data.msg} name="msg" onChange={Inputevent} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div className="col-12">
    <button className="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
</form >   
</div>
    </div>
  </div>
    </div>
  )
}
