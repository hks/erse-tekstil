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
                currentMenuItem={'/uretim'}
                backgroundImage={'/img/erse-production-banner.jpg'}
                title={'Üretim'}
            />

            <div className="elementor-boxed-row full-height">

                <div className="column">
                    <CustomTitle fontWeight={400}>
                        Teknik Geliştirme, Planlama, Deneyim ve Hızlı Hizmet
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
                <div className="column image" style={{backgroundImage:'url("/img/production/production-1.jpg")'}}>
                </div>
            </div>

            <div className="elementor-boxed-row revert full-height">

                <div className="column">
                    <CustomTitle fontWeight={400}>
                        Ürün Tasarımı
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
                <div className="column image" style={{backgroundImage:'url("/img/production/production-2.jpg")'}}>
                </div>
            </div>

            <div className="elementor-boxed-row full-height">

                <div className="column">
                    <CustomTitle fontWeight={400}>
                        Kumaş Geliştirme
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
                <div className="column image" style={{backgroundImage:'url("/img/production/production-3.jpg")'}}>
                </div>
            </div>

            <div className="elementor-boxed-row revert full-height">

                <div className="column">
                    <CustomTitle fontWeight={400}>
                        Konfeksiyon Geliştirme ve Üretim
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
                <div className="column image" style={{backgroundImage:'url("/img/production/production-4.jpg")'}}>
                </div>
            </div>

            <div className="elementor-boxed-row full-height">

                <div className="column">
                    <CustomTitle fontWeight={400}>
                        Akıllı Etkili ve Süratli
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
                <div className="column image" style={{backgroundImage:'url("/img/production/production-5.jpg")'}}>
                </div>
            </div>

            <SocialRow/>
            <Footer/>
            <PartialFoot/>
        </>
    )
}
