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


            <div className="blog-page">

                <div className="content">

                    <a className="post" href={'#'}>
                        <div className="thumbnail">
                            <img src={'/img/posts/post-1.jpg'}/>
                        </div>
                        <div className="title">
                            Çevre ve Doğal Kaynaklar
                        </div>
                        <div className="summary">
                            Faaliyetlerimizin çevre üzerindeki etkisini en aza indirmek için önlemler almaktayız. Bizim tarafımızdan ve diğer fabrikalarda üretici faaliyetlerinin ürettiği emisyon kaynaklarını azaltmak ve hatta ortadan kaldırmak, doğal kaynakları (su ve yenilenemeyen kaynaklar) korumak için elimizden geleni çabayı göstermekteyiz.
                        </div>
                    </a>

                    <div className="separator"></div>

                    <a className="post" href={'#'}>
                        <div className="thumbnail">
                            <img src={'/img/posts/post-2.jpg'}/>
                        </div>
                        <div className="title">
                            Geri Dönüşüm Nedir ve Nasıl Yapılır
                        </div>
                        <div className="summary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                        </div>
                    </a>

                    <div className="separator"></div>

                    <a className="post" href={'#'}>
                        <div className="thumbnail">
                            <img src={'/img/posts/post-3.jpg'}/>
                        </div>
                        <div className="title">
                            Çevre Yönetmeliği
                        </div>
                        <div className="summary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                        </div>
                    </a>

                </div>
                <div className="separator"></div>
                <div className="side-bar">
                    <div className="section">
                        <div className="title">
                            Kategoriler
                        </div>
                        <ul>
                            <li>
                                <a href={'#'}>
                                    Kategori 1
                                </a>
                            </li>
                            <li>
                                <a href={'#'}>
                                    Kategori 2
                                </a>
                            </li>
                            <li>
                                <a href={'#'}>
                                    Kategori 3
                                </a>
                            </li>
                            <li>
                                <a href={'#'}>
                                    Kategori 4
                                </a>
                            </li>
                            <li>
                                <a href={'#'}>
                                    Kategori 5
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="section">
                        <div className="title">
                            Son Yazılar
                        </div>
                        <ul>
                            <li>
                                <a href={'#'}>
                                    Çevre ve Doğal Kaynaklar
                                </a>
                            </li>
                            <li>
                                <a href={'#'}>
                                    Geri Dönüşüm Nedir ve Nasıl Yapılır
                                </a>
                            </li>
                            <li>
                                <a href={'#'}>
                                    Çevre Yönetmeliği
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="section">
                        <div className="title">
                            Etiketler
                        </div>
                        <div className={'tag-cloud'}>
                                <a href={'#'}>
                                    Enerji
                                </a>
                                <a href={'#'}>
                                    Geri Dönüşüm
                                </a>
                                <a href={'#'}>
                                    Sürdürülebilirlik
                                </a>
                                <a href={'#'}>
                                    Mevzuat
                                </a>
                                <a href={'#'}>
                                    Çevre
                                </a>
                        </div>
                    </div>
                </div>

            </div>

            <SocialRow/>
            <Footer/>
            <PartialFoot/>
        </>
    )
}
