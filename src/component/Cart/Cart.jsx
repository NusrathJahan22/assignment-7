/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import './Cart.css'


const Cart = ({selectedInformation ,totalRemaining,totalCredit}) => {
    
    console.log(selectedInformation)
    return (
        <div className="side-cart">

            <h2>This is Cart</h2><hr/>
            
            <h3>Selected Course : {selectedInformation.length}</h3>
            <h3>Total Credit : {totalCredit} hr</h3>
            <h3>Remaining Credit : {totalRemaining} hr</h3>
            <h3>Course Name</h3>
            {
                selectedInformation.map((information) => (
                    <li>{information.course_name}</li>
                ))}
            
        </div>
    );
};

export default Cart;