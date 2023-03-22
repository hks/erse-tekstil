import Head from "next/head";

type IProps = {
    title?: string;
};

const PartialHead = ({
    title = "Erse Tekstil",
                     }:IProps) => {
    return (
        <Head>
            <title>Erse Tekstil</title>
            <meta name="description" content="Generated by create next app"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="/favicon.ico"/>
            {/*<script async={true} src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>*/}
            <script
                src="https://code.jquery.com/jquery-3.6.0.min.js"
                integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
                crossOrigin="anonymous"></script>
        </Head>
    );
};

export default PartialHead;