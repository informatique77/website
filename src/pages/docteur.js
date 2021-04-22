import React from "react"

import Layout from "../components/Layout/Layout"
import PagesHeader from "../components/PagesHeader/PagesHeader"
import SEO from "../components/seo"

import "../styles/Doctor.scss"

const Doctors = () => (
  <Layout>
    <SEO title="Recrutement docteur Consultations 7 sur 7" />
    <PagesHeader title="Vous êtes docteur ?" />
    <div className="doctor-text-section">
      <div className="doctor-text-container">
      <h3>Travailler à Consultations 7/7, c’est choisir :</h3>
      <ul>
        <li>
          Une activité de groupe et en réseau optimisée pour se libérer un
          maximum de temps médical.
        </li>
        <li>
          De bénéficier de vastes centres médicaux modernes multi disciplinaires
          avec imagerie médicale, biologie et paramédicaux intégrés et à
          l’implantation urbaine attractive.
        </li>
        <li>
          Des conditions de travail exceptionnelles « Plug and Play » : pour se
          libérer des contraintes administratives, dans chaque centre nos
          assistantes gèrent l’accueil des patients, la salle d’attente, la
          facturation, le quotidien administratif et vous assistent dans les
          soins.
        </li>
        <li>
          Le « Zéro papier » : un staff administratif interne complet
          (directrice administrative et financière, comptable, secrétaire de
          direction, conseiller RH, informaticien, agents polyvalents) gère tout
          votre administratif et la gestion des centres.
        </li>
        <li>
          Une activité garantie par votre Contrat d’Activité sans aucun droit
          d’entrée : travaillez le nombre de jours que vous souhaitez avec des
          revenus attractifs pour pouvoir vous libérer du temps de vie.
        </li>
        <li>
          D’être acteur du développement de l’entreprise et participer aux
          investissements immobiliers si vous le souhaitez.
        </li>
        <li>
          De participer à des staffs médicaux réguliers avec nos correspondants
          spécialistes et également aux séjours à l’étranger de fin d’année de
          l’entreprise.
        </li>
      </ul>
      </div>
    </div>
  </Layout>
)

export default Doctors
