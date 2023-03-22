import NavigationElements from "@/constants/NavigationElements";

type IProps = {
    isLandingPage?: boolean;
}

const Header = ({
                    isLandingPage = false,
                }: IProps) => {
    return (
        <header className={isLandingPage ? 'header landing' : 'header'}>

            <div className="background">
                {isLandingPage ? (
                    <div className={'slider'}>
                        <div className={'image'} style={{backgroundImage:'url("/img/erse-landing-slider-1.jpg")'}}>
                        </div>
                        <div className={'image'} style={{backgroundImage:'url("/img/erse-landing-slider-2.jpg")'}}>
                        </div>
                        <div className="overlay"></div>
                        <div className="buttons">
                            <img id={'prev'} src={'/img/icons/slider-prev.png'}/>
                            <img id={'next'} src={'/img/icons/slider-next.png'}/>
                        </div>
                    </div>
                ):(
                    <div className={'image'} style={{backgroundImage:'url("/img/erse-landing-slider-1.jpg")'}}>
                        <div className="overlay"></div>
                    </div>
                )}
            </div>

            <div className="full-width content">
                <div className="boxed top">
                    <div className="column">
                        <span>
                            Takip Et:
                        </span>
                        <a href={'#'} className="social-link">
                            <img src={'/img/icons/linkedin.png'}/>
                        </a>
                        <a href={'#'} className="social-link">
                            <img src={'/img/icons/instagram.png'}/>
                        </a>
                    </div>
                    <div className="column">
                        <a href={'#'} className="language-switcher">
                            EN
                        </a>
                    </div>
                </div>
                <div className="full-width logo">
                    <img className="logo-itself" src={'/img/erse-logo.png'}/>
                </div>
                <div className="full-width menu">

                    <ul>
                        {NavigationElements.map((element, index) => {
                            if(element.isHeader){
                                return (
                                    <li key={index}>
                                        <a href={element.href}>
                                            {element.title}
                                        </a>
                                    </li>
                                )
                            }
                        })}
                    </ul>

                </div>
            </div>

        </header>
    );
};


export default Header;
