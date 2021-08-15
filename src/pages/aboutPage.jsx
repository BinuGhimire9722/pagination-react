import LoadingOverlay from 'react-loading-overlay';
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import PhotoService from "../services/photosService";
function AboutPage(props) {

    const [photo, setPhoto] = useState([]);
    const [page, setPage] = useState(1);
    const [ isActive , setActive] = useState(false);

    const getPhotos = async () => {
        // yeta load hunxa haina ? true
        setActive(true);
        var result = await PhotoService.getPhoto(page);
        // yspaxi sakxinxa hiana ?... result ma data aauxa false
        console.log(result);
        setActive(false);
        setPhoto(result.data);
    }

    useEffect(() => {
        getPhotos();
    }, [])

    useEffect(() => {
        getPhotos();
    }, [page])

    const previousPhoto = () => {
        if (page > 1) { setPage(page - 1); }
    }

    const nextPhoto = () => {
        setPage(page + 1);
    }

    return <div>
        <Container>
        <LoadingOverlay
            active={isActive}
            spinner
            text='Loading your content...'
        >
            {/* <p>Some content or children or something.</p> */}

            <Row className="photoRow">
                {photo.map((item) => {
                    return <Col md={3}>
                        <p className="title">{item.title}</p>
                        <img src={item.url} className="img-fluid"></img>
                    </Col>
                })}
            </Row>
            <Button onClick={previousPhoto}>Previous</Button>
            <span className="pageNo">{page}</span>
            <Button onClick={nextPhoto}>Next</Button>
        </LoadingOverlay>
        </Container>
    </div>
}

export default AboutPage;