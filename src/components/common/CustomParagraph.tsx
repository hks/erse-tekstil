const CustomParagraph = ({
                         children = '',
                         textAlign = 'left',
                     }) => {
    return (
        <h2 className={'custom-paragraph'} style={{textAlign:textAlign}}>{children}</h2>
    )
};

export default CustomParagraph;
