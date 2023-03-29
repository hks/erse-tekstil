const SocialRow = ()=>{
    return(
        <div className={'social-row'}>

            <div className="line"></div>

            <div className="wrapper">

                <a className="social-button" href={'#'} target={'_blank'}>
                    <div className={'icon'}>
                        <img src={'/img/icons/social-youtube.png'}/>
                    </div>
                    <span>
                        Bizi Youtube'da takip edin
                    </span>
                </a>

                <a className="social-button" href={'#'} target={'_blank'}>
                    <div className={'icon'}>
                        <img src={'/img/icons/social-linkedin.png'}/>
                    </div>
                    <span>
                        Bizi Linkedin'de bulun
                    </span>
                </a>

                <a className="social-button" href={'#'} target={'_blank'}>
                    <div className={'icon'}>
                        <img src={'/img/icons/social-instagram.png'}/>
                    </div>
                    <span>
                        Bizi Instagram'da takip edin
                    </span>
                </a>

            </div>

            <div className="line"></div>

        </div>
    );
}

export default SocialRow;
