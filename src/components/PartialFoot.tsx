import React from "react";
import Script from 'next/script'


type IProps = {
};

const PartialHead = ({}:IProps) => {
    return (
        <>
            {/*<Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js" />*/}
            <Script src="/scripts/main.js" />
        </>
    );
};

export default PartialHead;
