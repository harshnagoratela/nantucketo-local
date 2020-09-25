import React from 'react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import ProductGrid from '../components/ProductGrid'

const ProductsPage = () => (
  <Layout title="a Nantucket shop" description="a nantucket store & blog for nantucketers everywhere">
    <PageHeader
      title="Shop"
      subtitle="Shop all products"
      backgroundImage="../images/headless_hero.jpg"
    />
    <section className="section">
      <div className="container">
        <ProductGrid />
      </div>
    </section>
  </Layout>
)

export default ProductsPage
