import React, { useEffect } from "react";
import Products from "../data/productData";
import { Row, Col, Container,Button } from "react-bootstrap";
import { useState } from "react";

function ProductPage(props) {

    const[page,setPage] = useState(1);
    const[product,setProduct] = useState([]);

    const loadProduct=()=>{
        // 1 = 0 , 2
        // 2 = 2, 4
        // 3 = 4, 6
        // x  =  2x -2 , 2x
        let firstProduct = Products.slice( 2*page -2 , 2*page);
        setProduct(firstProduct);
    }


    useEffect(()=>{
        loadProduct();
    },[])

    useEffect(()=>{
        loadProduct();
    },[page])

    const previousBtn=()=>{
        setPage(page-1);
    }

    const nextBtn=()=>{
        setPage(page+1);
    }

    return <div>
        <Container>
            <Row>
                {product.map((item) => {
                    return <Col md={3} className="productCard">
                        <div>{item.name}</div>
                        <div><img src={item.image} className="img-fluid productImg"></img></div>
                        <div>{item.price} {item.unit}</div>
                        <Button className="cart">Add To Cart</Button>
                    </Col>
                })}
            </Row>
            <Button onClick={previousBtn}>Previous</Button>
            <span>{page}</span>
            <Button onClick={nextBtn}>Next</Button>
        </Container>
    </div>
}

export default ProductPage;