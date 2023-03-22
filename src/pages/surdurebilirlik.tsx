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
import CustomSubTitle from "@/components/common/CustomSubTitle";

export default function Brand() {
    return (
        <>
            <PartialHead/>
            <Header
                isLandingPage={false}
                currentMenuItem={'/surdurebilirlik'}
                backgroundImage={'/img/erse-sustainability-banner.jpg'}
                title={'Sürdürebilirlik'}
            />



            <SocialRow/>
            <Footer/>
            <PartialFoot/>
        </>
    )
}
