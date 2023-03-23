import CustomTitle from "@/components/common/CustomTitle";
import CustomParagraph from "@/components/common/CustomParagraph";

const ContactForm = ()=>{
    return(
        <div className={'contact-form-container'}>

            <CustomTitle textAlign={'center'}>
                BİZİMLE İLETİŞİME GEÇİN
            </CustomTitle>

            <div className={'contact-row'}>
                <div className={'column'}>
                    <input type={'text'} placeholder={'Adınız Soyadınız *'} name={'name'}/>
                </div>
                <div className={'separator'}></div>
                <div className={'column'}>
                    <input type={'text'} placeholder={'E-mail *'} name={'name'}/>
                </div>
            </div>
            <div className={'contact-row'}>
                <div className="column">
                    <textarea placeholder={'Mesajınız *'}>

                </textarea>
                </div>
            </div>
            <div className={'contact-row'}>
                <div className="column">
                    <input type={'submit'} value={'Gönder'}/>
                </div>
            </div>

        </div>
    );
};

export default ContactForm;
