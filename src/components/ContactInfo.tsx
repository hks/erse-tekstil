import CustomTitle from "@/components/common/CustomTitle";
import CustomParagraph from "@/components/common/CustomParagraph";

const ContactInfo = ()=>{
    return(
        <div class={'contact-info-container'}>

            <CustomTitle>
                İletişim Bilgileri
            </CustomTitle>

            <CustomParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            </CustomParagraph>

            <div className={'info-row'}>
                <img className={'icon'} src={'/img/icons/icon-pin.png'}/>
                <p>
                    Merkez Mahallesi Oruc Reis Sk. No:5 34197<br/>
                    Yenibosna, Istanbul, Turkey
                </p>
            </div>
            <a className={'info-row'} href={'mailto:info@erse.com.tr'}>
                <img className={'icon'} src={'/img/icons/icon-mail.png'}/>
                <p>info@erse.com.tr</p>
            </a>
            <a className={'info-row'} href={'tel:+902124510180'}>
                <img className={'icon'} src={'/img/icons/icon-phone.png'}/>
                <p>+90 212 451 0180</p>
            </a>
        </div>
    );
};

export default ContactInfo;
