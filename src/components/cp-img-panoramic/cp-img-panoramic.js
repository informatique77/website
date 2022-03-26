import React from "react"
import { Pannellum } from "pannellum-react";

const cpImgPanoramic = ({ img }) => {
    return (
        <div className="cp-img-panoramic">
            <Pannellum
                width="100%"
                height="auto"
                image={img}
                autoLoad
            />
        </div>
    )
}

export default cpImgPanoramic