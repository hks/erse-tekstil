const CustomTitle = ({
                         children = '',
                         textAlign = 'left',
                         fontWeight = 700
                     }: {
                        children?: any,
                        textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit',
                        fontWeight?: number
                    }) => {
    return (
        <h2 className={'custom-title-h2'} style={{textAlign: textAlign, fontWeight: fontWeight}}>{children}</h2>
    )
};

export default CustomTitle;
