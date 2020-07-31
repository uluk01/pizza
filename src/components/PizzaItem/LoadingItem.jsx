import React from "react"
import ContentLoader from "react-content-loader";


const LoadingItem = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="136" cy="122" r="123" />
        <rect x="-3" y="258" rx="3" ry="3" width="274" height="31" />
        <rect x="-3" y="300" rx="6" ry="6" width="275" height="84" />
        <rect x="1" y="400" rx="6" ry="6" width="93" height="49" />
        <rect x="143" y="400" rx="30" ry="30" width="128" height="49" />
    </ContentLoader>
);

export default LoadingItem;