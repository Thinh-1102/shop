import React from 'react'
import Helmet from "../components/Helmet";
import ProductsData from "../assets/fake-data/ProductData"
import Section, { SectionTitle , SectionContent } from "../components/Section";
import Grid from "../components/Grid"
import ProductCart  from "../components/ProductCart"
import ProductView from '../components/ProductView';
import { useParams } from 'react-router-dom';

const Product  = () => {
    const params = useParams()
    const product = ProductsData.getProductBySlug(params.slug)
    const relatedProducts = ProductsData.getProducts(8)
    
    React.useEffect(() => {
        window.scrollTo(0,0)
    }, [product])
    return (
        <Helmet title={product.title}>
            <Section>
                <SectionContent>
                    <ProductView product={product}/>
                </SectionContent>
            </Section>
            <Section>
                <SectionTitle>
                    Khám phá thêm
                </SectionTitle>
                <SectionContent>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            relatedProducts.map((item, index) => (
                                <ProductCart
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    title={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />   
                            ))
                        }
                    </Grid>
                </SectionContent>
            </Section>
        </Helmet>
    )
}
export default Product ;