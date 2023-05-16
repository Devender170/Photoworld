import React from 'react';
import Card from './Card';
import Sdata from "../src/Sdata/Sdata";

export default function Service() {
  return (
    <>
    <div className="service_Id my-5 ">
        <h1 className="text-center font-weight-bold">Our Service </h1>
  </div>
    <div className="container-fluid mb-5">
<div className="row">
<div className="col-10 mx-auto">
<div className="row gy-4">
  {
    Sdata.map((val, ind)=> {
      return (
        <Card key={ind}
        imgsrc={val.imgsrc}
        title={val.title}
        />
      )
    })
  }
</div>
</div>
</div>
</div>
    </>
  )
}
