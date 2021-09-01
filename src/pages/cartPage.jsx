import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../state/actions/cartActions";

function CartPage(props) {

    const cart = useSelector((state) => state.cart);
    console.log(cart);

    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeCart(id));
    }

    return <div>
        <Container>
            {cart.cartProduct.length >= 1 ?
        
                <div>
                    <Row className="margin-TB">Total : {cart.total}</Row>

                    <Row>
                        {cart.cartProduct.map((item) => {
                            return <Col md={3} >
                                <div>{item.name}</div>
                                <div><img src={item.image} className="img-fluid productImg"></img></div>
                                <div>{item.price} {item.unit}</div>

                                <Button onClick={(e)=>handleRemove(item.id)}>Remove</Button>
                            </Col>
                        })}
                    </Row>
                </div>
                :
                <p>Cart is empty.</p>
            }
        </Container>
    </div>
}

export default CartPage;