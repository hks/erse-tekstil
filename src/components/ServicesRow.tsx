import ServicesElements from "@/constants/ServicesElements";

const ServicesRow = () => {
    return (
        <div className={'services-row'}>

            <div className="title">
                <h2>
                    Hizmetlerimiz
                </h2>
            </div>

            <div className="services">

                {ServicesElements.map((element, index) => {
                    return (
                        <div className="service" key={index}>
                            <div className="image">
                                <img src={element.image}/>
                            </div>
                            <div className="title">
                                <h3>
                                    {element.title}
                                </h3>
                            </div>
                            <div className="description">
                                <p>
                                    {element.description}
                                </p>
                            </div>
                        </div>
                    );
                })}

            </div>

        </div>
    );
};

export default ServicesRow;
