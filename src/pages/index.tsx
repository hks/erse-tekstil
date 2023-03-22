import Header from "@/components/Header";
import SubHero from "@/components/SubHero";
import ServicesRow from "@/components/ServicesRow";
import BrandSliderRow from "@/components/BrandSliderRow";
import SocialRow from "@/components/SocialRow";
import Footer from "@/components/Footer";
import PartialHead from "@/components/PartialHead";
import PartialFoot from "@/components/PartialFoot";

export default function Home() {
    return (
        <>
            <PartialHead/>
            <Header isLandingPage={true} currentMenuItem={'/'}/>
            <SubHero/>
            <ServicesRow/>
            <BrandSliderRow/>
            <SocialRow/>
            <Footer/>
            <PartialFoot/>
        </>
    )
}
