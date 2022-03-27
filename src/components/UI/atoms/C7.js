import React from "react"

const C7 = ({ typo }) => {
    switch (typo) {
        case 'h1':
            return <div className="txt-52 f-700 uppercase c7-typo"><span >c</span><span>7</span></div>
        case 'h2':
            return <div className="txt-40 f-700 uppercase c7-typo"><span>c</span><span>7</span></div>
        case 'h3':
            return <div className="txt-38 f-700 uppercase c7-typo"><span>c</span><span>7</span></div>
        case 'body':
            return <div className="txt-20 f-700 uppercase c7-typo"><span>c</span><span>7</span></div>
    }
}

export default C7