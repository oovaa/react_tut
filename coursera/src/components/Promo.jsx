function Promo({ heading, promoSubHeading}) {
    return (
        <div className="promo-section">
            <div>
                <h1 style={{color:"tomato", fontSize:"40px", fontWeight:"bold"}}>
                    {heading}
                </h1>
            </div>
            <div>
                <h2>{promoSubHeading}</h2>
            </div>
        </div>
    );
}

export default Promo;