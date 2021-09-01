import React, { useEffect } from "react";
import Products from "../data/productData";
import { Row, Col, Container,Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../state/actions/cartActions";

function ProductPage(props) {

    const cart = useSelector((state)=>state);
    console.log(cart);

    const[page,setPage] = useState(1);
    const[product,setProduct] = useState([]);

    const dispatch = useDispatch();

    const loadProduct=()=>{
        // 1 = 0 , 2
        // 2 = 2, 4
        // 3 = 4, 6
        // x  =  2x -2 , 2x
        let firstProduct = Products.slice( 4*page -4 , 4*page);
        setProduct(firstProduct);
    }

    const handleAddCart=(item)=>{
        dispatch(addCart(item));
    }

    useEffect(()=>{
        loadProduct();
    },[])

    useEffect(()=>{
        loadProduct();
    },[page])

    const previousBtn=()=>{
        if(page > 1){
        setPage(page-1);
        }
    }

    const nextBtn=()=>{

        // 1 = 1  = 4*0 +1  
        // 2 = 5  =  4*1+1
        // 3 = 9  =  4*2+1
        // 4 = 13 = 4*3+1
        let minProd = 4 * page-1 +1;

        let totalProduct = Products.length;
        if(minProd < totalProduct ){
            setPage(page+1);
        }
    }

    return <div>
        <Container>
            <Row>
                {product.map((item) => {
                    return <Col md={3} className="productCard">
                        <div>{item.name}</div>
                        <div><img src={item.image} className="img-fluid productImg"></img></div>
                        <div>{item.price} {item.unit}</div>
                        <Button className="cart" onClick={(e)=>handleAddCart(item)}>Add To Cart</Button>
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