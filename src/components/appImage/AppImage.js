import { useRef } from 'react';

import './appImage.css';

const AppImage = () => {
    const imageRef = useRef();
    const imageWrapperRef = useRef();

    function addImage() {
        imageWrapperRef.current.classList.remove('hide');
    }

    function increaseImage() {
        imageRef.current.classList.add('img-increase');
    }

    function decreaseImage() {
        imageRef.current.classList.remove('img-increase');
    }

    function removeImage() {
        imageWrapperRef.current.classList.add('hide');
    }

    return (
        <>
            <div className="place-image-wrapper" ref={imageWrapperRef}>
                <a href="https://www.marmaris.org/">
                    <img 
                        src="https://piligrim.ua/wp-content/uploads/2021/12/turunc-beach.jpg" 
                        alt="Marmaris" 
                        className="place-image" 
                        ref={imageRef} />
                </a>
            </div>

            <div className="btns">
                <button onClick={addImage}>Додати</button>
                <button onClick={increaseImage}>Збільшити</button>
                <button onClick={decreaseImage}>Зменшити</button>
                <button onClick={removeImage}>Видалити</button>
            </div>
        </>
    );
}

export default AppImage;