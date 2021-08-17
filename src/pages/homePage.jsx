import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button,Container } from "react-bootstrap";
import ToDoService from "../services/todoService";
import AboutUs from "./sections/aboutUs";
import AboutCompany from "./sections/aboutCompany";

function HomePage(props){

    const aboutArr = [<AboutUs/>,<AboutCompany/>];
    const [todos,setTodos]= useState([]);
    const [page,setPage] = useState(1);
    const [about,setAbout] = useState(0)

    const getTodos= async()=>{
        let result = await ToDoService.getTodo(page);
        console.log(result);
        setTodos(result.data);
    }

    useEffect(()=>{
        getTodos();
    },[])

    useEffect(()=>{
        getTodos();
    },[page])

    const previousTodos=()=>{
        if(page > 1){
            setPage(page-1);
        }
    }

    const nextTodos=()=>{
        setPage(page+1);
    }

    const showAbout=(index)=>{
        setAbout(index);
    }
    
    return <div>
        
        {todos.map((item)=>{
            return <p>{item.title}</p>
        })}
        <Button onClick={previousTodos}>Previous</Button>
        <span className="pageNo">{page}</span>
        <Button onClick={nextTodos}>Next</Button>

        <Container>
            <div className="aboutDiv">

            <span className="about"><a onClick={(e)=>showAbout(0)} >About Us</a></span>
            <span className="about"><a onClick={(e)=>showAbout(1)} >About Company</a></span>
            </div>
            {aboutArr[about]}
        </Container>

    </div>
}
export default HomePage;