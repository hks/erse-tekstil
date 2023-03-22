const CustomSubTitle = ({
                         children = '',
                         textAlign = 'left',
                     }) => {
    return (
        <h2 className={'custom-title-h5'} style={{textAlign:textAlign}}>{children}</h2>
    )
};

export default CustomSubTitle;
