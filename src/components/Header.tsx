import NavigationElements from "@/constants/NavigationElements";

type IProps = {
    isLandingPage?: boolean;
    currentMenuItem?: string;
    backgroundImage?: string;
    title?: string;
    subTitle?: string;
}

const Header = ({
                    isLandingPage = false,
                    currentMenuItem = '',
                    backgroundImage = '/img/erse-landing-slider-1.jpg',
                    title='',
                    subTitle=''
                }: IProps) => {
    return (
        <>
            <header className={isLandingPage ? 'header landing' : 'header'}>

                <div className="background">
                    {isLandingPage ? (
                        <div className={'slider'}>
                            <div className={'image active'} style={{backgroundImage:'url("/img/erse-landing-slider-1.jpg")'}}>
                            </div>
                            <div className={'image'} style={{backgroundImage:'url("/img/erse-landing-slider-2.jpg")'}}>
                            </div>
                            <div className={'image'} style={{backgroundImage:'url("/img/erse-landing-slider-3.jpg")'}}>
                            </div>
                            <div className="overlay"></div>
                            <div className="buttons">
                                <img className={'prev'} src={'/img/icons/slider-prev.png'}/>
                                <img className={'next'} src={'/img/icons/slider-next.png'}/>
                            </div>
                        </div>
                    ):(
                        <div className={'slider'}>
                            <div className={'image active'} style={{backgroundImage:'url("'+backgroundImage+'")'}}>
                            </div>
                            <div className="overlay"></div>
                            <div className="overlay-gradient"></div>
                        </div>
                    )}
                </div>

                <div className="content">
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
                    <div className="logo">
                        <img className="logo-itself" src={'/img/erse-logo.png'}/>
                    </div>
                    <div className="menu" id={'sticky-menu'}>

                        <ul>
                            {NavigationElements.map((element, index) => {
                                if(element.isHeader){
                                    return (
                                        <li key={index} className={element.href === currentMenuItem ? 'active' : ''}>
                                            <a href={element.href}>
                                                {element.title}
                                            </a>
                                        </li>
                                    )
                                }
                            })}
                        </ul>

                        <div className="mobile-menu" id={'mobile-menu-open'}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                    </div>

                    {(title !== '') ? (
                        <>
                            <div className="title">
                                {title}
                            </div>
                            {(subTitle !== '') ? (
                                <div className="sub-title">
                                    {subTitle}
                                </div>
                            ):null}
                        </>
                    ):null}

                </div>

            </header>
            <div className="mobile-header" id={'mobile-menu'}>
                <div className="top">
                    <div className="mobile-menu" id={'mobile-menu-close'}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
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
                <div className="social">
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
            </div>
        </>
    );
};


export default Header;
