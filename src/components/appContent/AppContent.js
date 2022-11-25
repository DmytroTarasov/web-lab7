import { Component, createRef } from 'react';

import './appContent.css';

class AppContent extends Component {
    state = {
        footballClicked: 0,
        favoriteMoviesClicked: 0
    }

    footballRef = createRef();
    favoriteMoviesRef = createRef();

    handleClick(event, otherElement, toggleClass, counterName) {
        if (this.state[counterName] === 0) {
            event.target.classList.add(toggleClass);
        } else {
            this.handleClicks([event.target, otherElement]);
        }
        this.setState(prevState => ({
            [counterName]: prevState[counterName] + 1
        }));
    }

    handleClicks(elements) {
        elements.forEach(element => {
            element.classList.toggle('blue');
            element.classList.toggle('green');
        });
    }

    render() {
        return (
            <>
                <p>Хоббі:</p>
                <ul>
                    <li>Спортзал</li>
                    <li>Настільний теніс</li>
                    <li ref={this.footballRef} 
                        onClick={(e) => this.handleClick(e, this.favoriteMoviesRef.current, 'blue', 'footballClicked')}>
                        Футбол
                    </li>
                </ul>

                <p ref={this.favoriteMoviesRef}
                    onClick={(e) => this.handleClick(e, this.footballRef.current, 'green', 'favoriteMoviesClicked')}>
                    Улюблені фільми:
                </p>
                <ol>
                    <li>Побег из Шоушенка, 1994</li>
                    <li>Крёстный отец, 1972</li>
                    <li>Крёстный отец 2, 1974</li>
                    <li>Перевозчик, 2002</li>
                </ol>

                <p>Мармарис - місто-курорт, яке розташоване на південному заході Туреччини.</p>
                <p>Точна дата заснування міста не відома, але у XI столітті до н.е. місто було відоме під назвою Фіскос. З VI ст. до н.е. перебувало під владою персів. У 334 р. до н.е., після приходу Олександра Македонського, місто було віддано Родосу. З 164 р. до н.е. місто перейшло під контроль римлян і було приєднане до Риму в I ст. до н.е.</p>
                <ul>
                    <li>Наприкінці XIII ст. було захоплене тюрками</li>
                    <li>У 1391 р. захоплене турками-османами і в 1424 р. остаточно приєднане до Османської імперії</li>
                    <li>У 1522 р. за наказом султана Сулеймана Пишного була побудована фортеця, і місто було перейменовано в Мармарис (з давньогрецької мови  — сяючий, блискучий)</li>
                </ul>
            </>
        );
    }
}

export default AppContent;