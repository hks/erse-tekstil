const CustomParagraph = ({
                         children = '',
                         textAlign = 'left',
                     }: {
                        children?: any,
                        textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit',
                    }) => {
    return (
        <h2 className={'custom-paragraph'} style={{textAlign:textAlign}}>{children}</h2>
    )
};

export default CustomParagraph;
