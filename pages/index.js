import React from 'react'
import Layout from '../components/global/Layout'
import Link from 'next/link'

const Index = () => {
    return (
        <Layout>
            <Link href="/modal" prefetch={true}>
                <a>A fully accessible Modal</a>
            </Link>
        </Layout>
    )
}

export default Index
