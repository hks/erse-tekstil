import BrandsElements from "@/constants/BrandsElements";

const BrandSliderRow = () => {
    return (
        <div className={'brand-slider-row'} style={{backgroundImage:'url("/img/brand-slider-background.jpg")'}}>
            <div className="overlay"></div>

            <div className="slider">
                {BrandsElements.map((element, index) => {

                    const sliderClassName = (index === 0)?"slide active":"slide";

                    return (
                        <div className={sliderClassName} key={index}>
                            <img src={element.brandLogo}/>
                        </div>
                    );
                })}
            </div>

            <div className="slider-bullets">
                {BrandsElements.map((element, index) => {
                    const bulletClassName = (index === 0)?"bullet active":"bullet";
                    return (
                        <div className={bulletClassName} key={index}></div>
                    );
                })}
            </div>

            <div className="buttons">
                <img className={'prev'} src={'/img/icons/slider-prev.png'}/>
                <img className={'next'} src={'/img/icons/slider-next.png'}/>
            </div>
        </div>
    );
};

export default BrandSliderRow;
