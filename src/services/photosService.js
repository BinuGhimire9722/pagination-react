import axios from "axios";
import url from "../constant/url";

 const PhotoService= {
    getPhoto : async (page) =>{
        var result = await axios.get(url+"/photos?_page="+page+"&_limit=4" );
        return result ;
    }
}

export default PhotoService;