import Header from "@/components/Header";
import SubHero from "@/components/SubHero";
import ServicesRow from "@/components/ServicesRow";
import BrandSliderRow from "@/components/BrandSliderRow";
import SocialRow from "@/components/SocialRow";
import Footer from "@/components/Footer";
import PartialHead from "@/components/PartialHead";
import PartialFoot from "@/components/PartialFoot";
import CustomTitle from "@/components/common/CustomTitle";
import CustomParagraph from "@/components/common/CustomParagraph";
import CustomQuote from "@/components/common/CustomQuote";

export default function Home() {
    return (
        <>
            <PartialHead/>
            <Header
                isLandingPage={false}
                currentMenuItem={'/hakkinda'}
                backgroundImage={'/img/erse-about-banner.jpg'}
                title={'Hakkımızda'}
            />

            <div className="elementor-separator" style={{height:'130px'}}></div>

            <div className="elementor-boxed-row">

                <div className="column">
                    <CustomTitle textAlign={'center'}>
                        Hikayemiz
                    </CustomTitle>
                    <CustomParagraph textAlign={'center'}>
                        Müşterilerimiz ile yakın ilişkiler kurmayı ve sürekli gelişme ilkesini prensip edinerek, 40 yılı geride bırakmış bir Türk tekstil üreticisiyiz. Zamanla, büyük uluslararası markalar için önemli bir tedarikçi haline gelmeyi başardık. Teknik gelişim, kalite, yenilikçiliğe verdiğimiz önem, değerlerimizi yönlendirmeye devam etmektedir.
                    </CustomParagraph>
                </div>
                <div className="separator">

                </div>
                <div className="column">
                    <img src={'/img/about/about-1.jpg'}/>
                </div>

            </div>

            <div className="elementor-separator" style={{height:'130px'}}></div>

            <div className="elementor-boxed-row revert">

                <div className="column">

                    <CustomTitle>
                        Firma Profili
                    </CustomTitle>
                    <CustomQuote
                        title={'Director\'s Word'}
                        name={'John Doe'}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    </CustomQuote>
                </div>
                <div className="separator">

                </div>
                <div className="column">
                    <img src={'/img/about/about-2.jpg'}/>
                </div>

            </div>

            <div className="elementor-separator" style={{height:'130px'}}></div>

            <div className="elementor-boxed-row">

                <div className="column">

                    <CustomTitle textAlign={'center'}>
                        Sertifikalar
                    </CustomTitle>
                    <CustomParagraph textAlign={'center'}>
                        Müşterilerimiz ile yakın ilişkiler kurmayı ve sürekli gelişme ilkesini prensip edinerek, 40 yılı geride bırakmış bir Türk tekstil üreticisiyiz. Zamanla, büyük uluslararası markalar için önemli bir tedarikçi haline gelmeyi başardık. Teknik gelişim, kalite, yenilikçiliğe verdiğimiz önem, değerlerimizi yönlendirmeye devam etmektedir.
                    </CustomParagraph>
                </div>
                <div className="separator">

                </div>
                <div className="column">
                    <img src={'/img/about/about-3.jpg'}/>
                </div>

            </div>

            <div className="elementor-separator" style={{height:'130px'}}></div>

            <div className="elementor-boxed-row revert">

                <div className="column">

                    <CustomTitle>
                        İnsan Kaynakları
                    </CustomTitle>
                    <CustomQuote
                        title={'Director\'s Word'}
                        name={'John Doe'}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    </CustomQuote>

                </div>
                <div className="separator">

                </div>
                <div className="column">
                    <img src={'/img/about/about-4.jpg'}/>
                </div>

            </div>

            <div className="elementor-separator" style={{height:'130px'}}></div>

            <SocialRow/>
            <Footer/>
            <PartialFoot/>
        </>
    )
}
