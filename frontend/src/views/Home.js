import React from "react";
import products from "../data/products";
import Product from "../components/Product";
import { Row, Col } from 'bootstrap-4-react';

const Home = () => {
    return (
        <>
            <h3>Добро пожаловать в магазин IGadgetShop</h3>
            <Row>
                {products.map((product) => 
                    <Col sm={12} md={6} lg={4}>
                       <Product product={product} />
                    </Col>
                )}
            </Row>
        </>
    )
}

export default Home;
