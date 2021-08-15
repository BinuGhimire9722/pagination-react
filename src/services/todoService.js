import axios from "axios";
import url from "../constant/url";

const ToDoService = {

    getTodo : async (page) => {
        var result = await axios.get(url+"/todos?_page="+page+"&_limit=5");
        return result;
    }
}

export default ToDoService;
