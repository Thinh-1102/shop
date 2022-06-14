import { Link } from 'react-router-dom'

import Helmet from "../components/Helmet";
import HeroSlider from "../components/HeroSlider";
import {heroSliderData} from '../assets/fake-data/hero-slider'
import Section, { SectionTitle, SectionContent} from '../components/Section'
import policy from "../assets/fake-data/policy"
import Policy from "../components/Policy"
import Grid from "../components/Grid"
import ProductsData from '../assets/fake-data/ProductData'
import ProductCart from '../components/ProductCart'
import Banner from '../assets/images/banner.png'
function Home() {
    return ( <Helmet title="trang chủ">
        <div className="container">
        {/* start hero slider */}
        <HeroSlider 
        data={heroSliderData}
        auto
        timeOut={4000}
        />
        {/* end hero slider */}

        {/* start policy Card Section */}
        <Section>
            <SectionContent>
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={20}
                >
                    {
                        policy.map((item,index)=>(
                            <Link to="/policy" key={index}>
                                <Policy
                                    name={item.name}
                                    desc = {item.description}
                                    icon={item.icon}
                                />
                            </Link>
                        ))
                    }
                </Grid>
            </SectionContent>
        </Section>
        {/* end policy Card Section */}
        {/* start best selling Section */}
        <Section>
            <SectionTitle>
                Top sản phẩm bán chạy trong tuần
            </SectionTitle>
            <SectionContent>
            <Grid
                col={4}
                mdCol={2}
                smCol={1}
                gap={20}
            >
                {ProductsData.getProducts(4).map((product,index)=>(
                    <ProductCart
                        key={index}
                        img01={product.image01}
                        img02={product.image02}
                        title={product.title}
                        slug={product.slug}
                        price={Number(product.price)}
                    />
                ))}
            </Grid>
            </SectionContent>
        </Section>
        {/* end best selling Section */}

        {/* start new production Section */}
        <Section>
            <SectionTitle>
                sản phẩm mới về
            </SectionTitle>
            <SectionContent>
            <Grid
                col={4}
                mdCol={2}
                smCol={1}
                gap={20}
            >
                {ProductsData.getProducts(8).map((product,index)=>(
                    <ProductCart
                        key={index}
                        img01={product.image01}
                        img02={product.image02}
                        title={product.title}
                        slug={product.slug}
                        price={Number(product.price)}
                    />
                ))}
            </Grid>
            </SectionContent>
        </Section>
        {/* end new production Section */}

        {/* banner */}
        <Section>
            <SectionContent>
                <Link to="/catalog" className="banner">
                    <img src={Banner} alt="" />
                </Link>
            </SectionContent>
        </Section>
        {/* end banner */}

        {/* start popular production Section */}
        <Section>
            <SectionTitle>
                sản phẩm phổ biến
            </SectionTitle>
            <SectionContent>
            <Grid
                col={4}
                mdCol={2}
                smCol={1}
                gap={20}
            >
                {ProductsData.getProducts(12).map((product,index)=>(
                    <ProductCart
                        key={index}
                        img01={product.image01}
                        img02={product.image02}
                        title={product.title}
                        slug={product.slug}
                        price={Number(product.price)}
                    />
                ))}
            </Grid>
            </SectionContent>
        </Section>
        {/* end popular production Section */}

        </div>
        
    </Helmet> );
}

export default Home;