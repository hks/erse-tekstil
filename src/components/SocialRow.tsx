const SocialRow = ()=>{
    return(
        <div className={'social-row'}>

            <div className="line"></div>

            <div className="wrapper">

                <a className="social-button" href={'#'} target={'_blank'}>
                    <div className={'icon'}>
                        <img src={'/img/icons/social-facebook.png'}/>
                    </div>
                    <span>
                        Find us on Facebook
                    </span>
                </a>

                <a className="social-button" href={'#'} target={'_blank'}>
                    <div className={'icon'}>
                        <img src={'/img/icons/social-twitter.png'}/>
                    </div>
                    <span>
                        Follow us on Twitter
                    </span>
                </a>

                <a className="social-button" href={'#'} target={'_blank'}>
                    <div className={'icon'}>
                        <img src={'/img/icons/social-instagram.png'}/>
                    </div>
                    <span>
                        Follow us on Instagram
                    </span>
                </a>

            </div>

            <div className="line"></div>

        </div>
    );
}

export default SocialRow;
