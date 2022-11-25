import { useEffect, useState } from 'react';

import './app.css';

import AppContent from "../appContent/AppContent";
import AppHeader from "../appHeader/AppHeader";
import AppImage from "../appImage/AppImage";
import GoodsCard from "../goodsCard/GoodsCard";

import Loader from '../loader/Loader';

function App() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://fakestoreapi.com/products?limit=10')
            .then(res => res.json())
            .then(goods => {
                setLoading(false);
                setGoods(goods);
            })
    }, []);

    return (
        <div className="container">
            <AppHeader />
            <AppContent />
            <AppImage />
            {
                !loading &&
                <div className="goods-wrapper">
                    {goods && goods.map((good, index) => {
                        return <GoodsCard good={good} key={index} />
                    })}
                </div>
            }
            {loading && <Loader />}

        </div>
    );
}

export default App;
