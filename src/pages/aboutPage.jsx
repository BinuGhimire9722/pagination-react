import LoadingOverlay from 'react-loading-overlay';
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import PhotoService from "../services/photosService";
import AboutLuffy from './sections/aboutLuffy';
import AboutZoro from './sections/aboutZoro';


function AboutPage(props) {

    const [photo, setPhoto] = useState([]);
    const [page, setPage] = useState(1);
    const [ isActive , setActive] = useState(false);
    var aboutArray=[<AboutLuffy/>,<AboutZoro/>]
    const [aboutData, setAbout] = useState(0);

    const getPhotos = async () => {

        setActive(true);
        var result = await PhotoService.getPhoto(page);
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

    const showAbout=(index)=>{
        setAbout(index);
    }

    return <div>
        <Container>

        <div className="aboutDiv">
            <span className="about">
                <a onClick={(e)=>showAbout(0)}>Monkey D. Luffy</a>
            </span>
            <span className="about">
                <a onClick={(e)=>showAbout(1)}>Roronoa Zoro</a>
            </span>
        </div>

        {aboutArray[aboutData]}

        <LoadingOverlay
            active={isActive}
            spinner
            text='Loading your content...'
        >
            {/* <p>Some content or children or something.</p> */}

            <Row className="photoRow">
                {photo.map((item) => {
                    return <Col md={3} className="photoCard">
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