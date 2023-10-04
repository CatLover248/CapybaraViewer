import axios from "axios";
import { useState } from "react";
import Button from "./Button";

const API_URL = "https://capybaraapi.yusuflovescats.repl.co"

const View = ()  => {


    const [res, setResult] = useState("")
    
    const fetchData = async () => {
        try{
            const response = await axios.get(API_URL);
            setResult(response.data);
            console.log(res)
        } catch (err){
            console.error(err);
        }
    };

    




    return(
        <div id="View" >
            <h1>Capybara</h1>
            <Button onClick={fetchData}>Capybara</Button>
            <br/>
            <br/>
            <img src={res} />
            <br/>
            <br/>
            <br/>
            
            
        </div>
        
    );
};

export default View;