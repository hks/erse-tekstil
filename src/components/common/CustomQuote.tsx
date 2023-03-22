const CustomQuote = ({
                         children = '',
                         title = '',
                         name = '',
                     }) => {
    return (
        <div className={'custom-quote'}>
            <div className={'title'}>
                <p>
                    {title}
                </p>
            </div>
            <div className={'content'}>
                <div className="left">
                    "
                </div>
                <div className={'right'}>
                    <p>
                        {children}
                    </p>
                    <div className="name">
                        {name}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CustomQuote;
