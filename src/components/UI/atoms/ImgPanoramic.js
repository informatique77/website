import React from "react"
import { Pannellum } from "pannellum-react";

const ImgPanoramic = ({ img }) => {
    return (
        <div className="img-panoramic">
            <Pannellum
                width="100%"
                height="100%"
                image={img}
                autoLoad
            />
        </div>
    )
}

export default ImgPanoramic