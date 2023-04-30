import './css/Card.css'
function CardPass({title, description, imageSrc}){
    return (
        <>
         <div className="card">
      <img className="card-img-top" src={imageSrc} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
        </>
    );
}


export default CardPass;