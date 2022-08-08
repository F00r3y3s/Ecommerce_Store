import React from "react";
import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components/";

const Home = ({ products, bannerData}) => {
  return (
    <>
      
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      

      <div className="products-heading">
        <h2>HOT PRODUCTS</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product = {product}/> )}
      </div>

      <div className="maylike-bestsellers-wrapper">
          <h2>BEST SELLERS</h2>
          <div className="marquee">
            <div className="maylike-bestsellers-container track">
                {products.map((item)=> (
                    <Product key={item._id}
                    product={item} />
                ))}
            </div>
          </div>
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
