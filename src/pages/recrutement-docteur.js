import * as React from 'react'

import Layout from "../components/Layout/Layout"
import PagesHeader from "../components/PagesHeader/PagesHeader"
import FormDoctor from "../components/Form/FormDoctor"
import Seo from "../components/seo"

const recruitmentDoctor = () => {
    return (
        <Layout>
            <Seo
                title="Recrutement Médecin"
                description="Page de recrutement Médecine pour C7 Santé"
                path="recrutement-docteur"
            />
            <PagesHeader title="Recrutement Médecin" />
            <div className="max-w">
                <FormDoctor />
            </div>
        </Layout>
    )
}

export default recruitmentDoctor