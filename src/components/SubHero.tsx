const SubHero = ()=>{
    return(
        <div className={'sub-hero'}>

            <div className="left">
                <img src={'/img/erse-sub-hero.jpg'}/>
            </div>
            <div className="separator"/>
            <div className="right">

                <h2>
                    Daha İyi Kalite<br/>
                    Esneklik Tasarım
                </h2>

                <p>
                    Müşterilerimiz ile yakın ilişkiler kurmayı ve sürekli gelişme ilkesini prensip edinerek, 40 yılı geride bırakmış bir Türk tekstil üreticisiyiz. Zamanla, büyük uluslararası markalar için önemli bir tedarikçi haline gelmeyi başardık. Teknik gelişim, kalite, yenilikçiliğe verdiğimiz önem, değerlerimizi yönlendirmeye devam etmektedir.
                </p>
                <p>
                    Erse, modern ve çabuk değişen uluslararası pazarda, farklı giyim sektörlerinde hizmet etmek için ideal biçimde konumlanmıştır. İstanbul'da bulunan merkezimizden, kadın giyimi, erkek giyimi ve çocuk giyiminde kanıtlanmış uzmanlığımı sunuyoruz.
                </p>

                <div className="buttons">
                    <a href={'/kadin-giyim'} className="button">
                        <img src={'/img/icons/service-icon-men.jpg'}/>
                        <span>
                            Kadın Giyim
                        </span>
                    </a>
                    <a href={'/erkek-giyim'} className="button">
                        <img src={'/img/icons/service-icon-women.jpg'}/>
                        <span>
                            Erkek Giyim
                        </span>
                    </a>
                    <a href={'/cocuk-giyim'} className="button">
                        <img src={'/img/icons/service-icon-kids.jpg'}/>
                        <span>
                            Çocuk Giyim
                        </span>
                    </a>
                </div>

            </div>

        </div>
    );
};

export default SubHero;
