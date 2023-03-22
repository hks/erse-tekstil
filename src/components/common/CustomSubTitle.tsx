const CustomSubTitle = ({
                         children = '',
                         textAlign = 'left',
                     }: {
                        children?: any,
                        textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit',
                    }) => {
    return (
        <h2 className={'custom-title-h5'} style={{textAlign:textAlign}}>{children}</h2>
    )
};

export default CustomSubTitle;
