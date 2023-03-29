import Header from "@/components/Header";
import SubHero from "@/components/SubHero";
import ServicesRow from "@/components/ServicesRow";
import BrandSliderRow from "@/components/BrandSliderRow";
import SocialRow from "@/components/SocialRow";
import Footer from "@/components/Footer";
import PartialHead from "@/components/PartialHead";
import PartialFoot from "@/components/PartialFoot";
import GoogleMaps from "@/components/GoogleMaps";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";

export default function Brand() {
    return (
        <>
            <PartialHead/>
            <Header
                isLandingPage={false}
                currentMenuItem={'/iletisim'}
                backgroundImage={'/img/erse-contanct-banner.jpg'}
                title={'İletişim'}
            />



            <div className="elementor-separator" style={{height:'130px'}}></div>

            <div className="elementor-boxed-row">

                <div className="column">
                    <GoogleMaps/>
                </div>
                <div className="separator">
                </div>
                <div className="column">
                    <ContactInfo/>
                </div>

            </div>

            <div className="elementor-separator" style={{height:'100px'}}></div>

            <ContactForm/>

            <SocialRow/>

            <div className="elementor-separator" style={{height:'50px'}}></div>

            <Footer/>
            <PartialFoot/>
        </>
    )
}
