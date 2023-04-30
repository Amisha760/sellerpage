import './css/Card.css'
import CardPass from './CardPass';
function Card(){
    return (<>
        
        <div className='heading-why'> 
        Why sellers choose Amazon ?
        </div>
        <div className="cards">
       
    <div className="container">
   
      <div className="row">
        <div className="col-sm-4 each-card">
        <CardPass
            title="Transparent pricing, no hidden charges"
            description="Amazon publicly displaying its fee structure publicly on all fee related pages on its website"
            imageSrc="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/Brand_Registry._CB424651244_.svg"
          />
        </div>
        <div className="col-sm-4 each-card">
        <CardPass
            title="Secure Timely Payments"
            description="Funds are deposited directly to your bank account every 7 days, including for Pay on Delivery order."
            imageSrc="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/Lightning_Deals_INR._CB424651235_.svg"
          />
        </div>
        <div className="col-sm-4 each-card">
        <CardPass
            title="Unbeatable Reach"
            description="Deliver to 100% of India's serviceable pincodes*, through Easy Ship & Fulfillment by Amazon."
            imageSrc="https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/iconography/Free_Shipping._CB424650773_._SY200_.png"
          />
        </div>
      </div>
    </div>


        </div>
        </>
    );
}
export default Card;