const GoogleMaps = ()=>{
    return(
        <div className={'google-maps-container'}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.1747759011923!2d28.816326330883275!3d41.02143206036372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa48ec1d3488b%3A0x942359e4c8bb86b8!2sErse%20Tekstil%20San.%20Ve%20Tic.%20A.S.!5e0!3m2!1str!2str!4v1679578718847!5m2!1str!2str"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default GoogleMaps;
