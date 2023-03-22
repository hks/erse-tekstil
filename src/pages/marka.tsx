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
import GalleryGrid from "@/components/GalleryGrid";

export default function Brand() {
    return (
        <>
            <PartialHead/>
            <Header
                isLandingPage={false}
                currentMenuItem={'/marka'}
                backgroundImage={'/img/erse-brand-banner.jpg'}
                title={'Marka'}
                subTitle={'BABOKAH'}
            />

            <div className="elementor-separator" style={{height:'130px'}}></div>

            <GalleryGrid/>

            <SocialRow/>
            <Footer/>
            <PartialFoot/>
        </>
    )
}
