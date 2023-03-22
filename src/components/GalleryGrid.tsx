import GalleryElements from "@/constants/GalleryElements";

const GalleryGrid = ()=>{
    return(
        <>
            <div className={'gallery-grid'}>

                {GalleryElements.map((element, index) => {
                    return (
                        <div className="gallery-item lightbox-button" key={element.id} data-item-id={element.id}
                             data-image-url={element.image}>
                            <div className="image" style={{backgroundImage: 'url("' + element.image + '")'}}>
                            </div>
                        </div>
                    );
                })}

            </div>
            <div className={'lightbox-fullscreen'} id={'lightbox-fullscreen'}>
                <div className="lightbox-image-container">
                    <img src={''}/>
                </div>
            </div>
        </>
    );
};

export default GalleryGrid;
