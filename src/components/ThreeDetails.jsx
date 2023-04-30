import './css/ThreeDetails.css'
function Threedetails(){
    return (
        <>
        <div className="details"> 
             <h5>You will need only 3 things to start selling on Amazon</h5>
             <div className="container">
                <div className='details-img'>
                    <img src="https://m.media-amazon.com/images/G/31/selldot/icons/GSTIcon1.svg"></img>
                    <p>GST Details</p>
                </div>
                <div className='details-img'>
                    <img  src="https://m.media-amazon.com/images/G/31/selldot/icons/PANIcon.svg"></img>
                    <p>PAN Details</p>
                </div>
                <div className='details-img'>
                    <img src="https://m.media-amazon.com/images/G/31/selldot/icons/BankAccountIcon1.svg"></img>
                    <p>Active Bank Account</p>
                </div>
             </div>
        </div>
        </>
    );
}

export default Threedetails;