/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import './Home.css'
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
    const [allInformation, setAllInformation] = useState([]);
    const [selectedInformation , setSelectedInformation] = useState([]);
const [totalRemaining , setTotalRemaining] = useState([0]);
const [totalCredit, setTotalCredit] = useState([0]);
useEffect(()=> {
 fetch('data.json')
 .then(res => res.json())
 .then(data => setAllInformation(data))
},[])


const handleInformation = (information) =>{
    const isExist = selectedInformation.find((item)=> item.id == information.id);
    let count = information.credit;
    if(isExist){
        toast("Already Booked")
    }else{
selectedInformation.forEach((item) =>{
    count = count + item.credit;
})
const totalRemainingAll = 31-count 


if(totalCredit > 20){
    toast("This Credit is Enough")
}else{
    setTotalCredit(count);
    setTotalRemaining(totalRemainingAll);
    console.log(totalRemaining)
            setSelectedInformation([...selectedInformation , information]);
        }
    }

    
};
console.log(selectedInformation);


    return (
        <> 
        <div className="main-cointainer">
            <div className="container">
            <h1 class="co">Course Registration</h1>
                <div className="allcart">
                    <div className="cart">
                        
                        {allInformation.map(information => (
<div kay={information.id} class="card  bg-white shadow-2x-l ">
  <figure><img src={information.image_url} alt="img"/></figure>
  <div class="card-body">
    <h2 class="card-title">{information.course_name}</h2>
    <p>{information.details}</p>
    <div className="info">
        <p>Price: {information.price}</p>
        <img src={"../../assets/icons8-bookmark-25.png"} alt="" />
        <p>Credit: {information.credit}hr</p>
    </div>
    <div class="card-actions justify-end">
      <button onClick={() => handleInformation(information)} class="btn">Select</button>
    </div>
  </div>
  <Toaster />
</div>
   
  ))
                                }
                            </div>
                            <div className="cart2 ">
                                    <Cart selectedInformation={selectedInformation} totalRemaining={totalRemaining} totalCredit={totalCredit}></Cart>
                                </div>
                                
            </div>
            </div>
            </div>
            </>
        
    
    )
};

export default Home;