import Head from 'next/head'
import Header from "@/components/Header";
import SubHero from "@/components/SubHero";
import ServicesRow from "@/components/ServicesRow";
import BrandSliderRow from "@/components/BrandSliderRow";
import SocialRow from "@/components/SocialRow";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>Erse Tekstil</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header isLandingPage={true}/>
            <SubHero/>
            <ServicesRow/>
            <BrandSliderRow/>
            <SocialRow/>
            <Footer/>
        </>
    )
}
