import React from "react"
// import loadable from '@loadable/component'

import C7 from "../atoms/C7"
import Button from "../atoms/Button"

// import img360 from "../../../assets/images/360/mandelieu-360.jpg"
import walkingIcon from "../../../assets/images/icons/walking.png"
import blueTelephoneIcon from "../../../assets/images/icons/icon-telephone-blue.png"
import rightArrowIcon from "../../../assets/images/icons/right-arrow.png"

// Use loadable to avoid error for "window server side rendering" during build
// const ImgPanoramic = loadable(() => import('../atoms/ImgPanoramic'))
const LastOpening = () => {
    return (
        <div className="last-opening">
            {/* <ImgPanoramic img={img360} />  */}
            <div className="content">
                <p className="txt-18 f-400 blue uppercase">Nouvelle ouverture</p>
                <h2 className="txt-40 f-600 blue">Centre médical <C7 typo="h2" /> Cagnes-Sur-Mer</h2>
                <p className="txt-20 f-400 black text">Notre tout nouveau centre médicale C7 est maintenant ouvert sur Cagnes-Sur-Mer !</p>
                <ul className="txt-20 f-400 black">
                    <li>- 8 cours du 11 novembre, 06800 Cagnes-Sur-Mer</li>
                    <li>- De 8h30 à 22h00 sans interruption</li>
                    <li>- 7 jour sur 7, week-ends et jours fériés inclus</li>
                </ul>
                <Button buttonType="with icon" buttonLabel="En savoir plus" link="/centre/cagnes-sur-mer" icon={rightArrowIcon} css="show-more" />
                <div className="btn-container">
                    <Button buttonType="link" buttonLabel="Vous y rendre" link="https://goo.gl/maps/uKjXEedoSxuuTCxw9" icon={walkingIcon} css="tertiary" />
                    <Button buttonType="link" buttonLabel="04-92-02-07-78" link="tel:04-92-02-07-78" icon={blueTelephoneIcon} css="tertiary" />
                </div>
            </div>
        </div>
    )
}

export default LastOpening