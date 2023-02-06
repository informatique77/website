import * as React from 'react'

import Layout from "../components/Layout/Layout"
import PagesHeader from "../components/PagesHeader/PagesHeader"
import FormAgent from "../components/Form/FormAgent"
import Seo from "../components/seo"

const recruitmentAgent = () => {
    return (
        <Layout>
            <Seo
                title="Recrutement Agent Polyvalent"
                description="Page de recrutement Agent Polyvalent pour C7 Santé"
                path="recrutement-agent"
            />
            <PagesHeader title="Recrutement Agent Polyvalent" />
            <div className="max-w">
                <FormAgent />
            </div>
        </Layout>
    )
}

export default recruitmentAgent