import './goodsCard.css';

const GoodsCard = ({ good }) => {

    return (
        <>
            <div className="good-item">
                <img src={good.image} alt={good.title} className="good-image" />

                <div className="good-description">
                    <p className="good-title">{ good.title.length < 50 ? good.title : good.title.slice(0, 50) + '...'}</p>
                    <p>{ good.price }</p>
                </div>
            </div>
        </>
    );
}

export default GoodsCard;