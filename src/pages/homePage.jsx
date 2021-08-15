import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import ToDoService from "../services/todoService";
function HomePage(props){

    const [todos,setTodos]= useState([]);
    const [page,setPage] = useState(1);

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

    return <div>
        
        {todos.map((item)=>{
            return <p>{item.title}</p>
        })}
        <Button onClick={previousTodos}>Previous</Button>
        <span className="pageNo">{page}</span>
        <Button onClick={nextTodos}>Next</Button>

    </div>
}
export default HomePage;