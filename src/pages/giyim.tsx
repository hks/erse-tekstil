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
                currentMenuItem={'/giyim'}
                backgroundImage={'/img/erse-textile-banner.jpg'}
                title={'Giyim'}
            />

            <div className="elementor-boxed-row full-height">

                <div className="column">
                    <CustomTitle fontWeight={400}>
                        Kadın Giyim
                    </CustomTitle>
                    <CustomSubTitle>
                        Lorem ipsum dolor sit amet,<br/>
                        consectetur adipiscing elit,<br/>
                        sed do eiusmod tempor
                    </CustomSubTitle>
                    <CustomParagraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    </CustomParagraph>
                </div>
                <div className="column image" style={{backgroundImage:'url("/img/textile/textile-1.jpg")', backgroundPosition:'top center'}}>
                </div>
            </div>

            <div className="elementor-boxed-row revert full-height">

                <div className="column">
                    <CustomTitle fontWeight={400}>
                        Erkek Giyim
                    </CustomTitle>
                    <CustomSubTitle>
                        Lorem ipsum dolor sit amet,<br/>
                        consectetur adipiscing elit,<br/>
                        sed do eiusmod tempor
                    </CustomSubTitle>
                    <CustomParagraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    </CustomParagraph>
                </div>
                <div className="column image" style={{backgroundImage:'url("/img/textile/textile-2.jpg")', backgroundPosition:'top center'}}>
                </div>
            </div>

            <div className="elementor-boxed-row full-height">

                <div className="column">
                    <CustomTitle fontWeight={400}>
                        Çocuk Giyim
                    </CustomTitle>
                    <CustomSubTitle>
                        Lorem ipsum dolor sit amet,<br/>
                        consectetur adipiscing elit,<br/>
                        sed do eiusmod tempor
                    </CustomSubTitle>
                    <CustomParagraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                    </CustomParagraph>
                </div>
                <div className="column image" style={{backgroundImage:'url("/img/textile/textile-3.jpg")', backgroundPosition:'top center'}}>
                </div>
            </div>

            <SocialRow/>
            <Footer/>
            <PartialFoot/>
        </>
    )
}
