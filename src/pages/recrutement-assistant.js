import * as React from 'react'

import Layout from "../components/Layout/Layout"
import PagesHeader from "../components/PagesHeader/PagesHeader"
import FormAssistant from "../components/Form/FormAssistant"
import Seo from "../components/seo"

const recruitmentAssistant = () => {
    return (
        <Layout>
            <Seo
                title="Recrutement Assistant(e)"
                description="Page de recrutement Assistant(e) pour C7 Santé"
                path="recrutement-assistant"
            />
            <PagesHeader title="Recrutement Assistant(e)" />
            <div className="max-w">
                <FormAssistant />
            </div>
        </Layout>
    )
}

export default recruitmentAssistant