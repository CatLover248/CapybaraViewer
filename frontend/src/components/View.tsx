import axios from "axios";
import { useState } from "react";
import Button from "./Button";

const API_URL = "https://capybaraapi.yusuflovescats.repl.co"

const View = ()  => {
    /*
    const [res, setResult] = useState([])

    
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get(API_URL);
                setResult(response.data);
                console.log(res)
            } catch (err){
                console.error(err);
            }
        };
        fetchData();
    }, []);
    

    return(
        <div>
            <h1>API DATA:</h1>
            <img src={res.url}/>
        </div>
    );
    */

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
        <div style={{textAlign: "center"}}>
            <h1>API DATA:</h1>
            <Button onClick={fetchData}>Capybara</Button>
            <br/>
            <br/>
            <img src={res} max-width="300px;" max-height="300px"/>

            <br/>
            <h1>Huge thanks to replit for hosting of the backend!</h1>
            <u>https://replit.com/</u>
            <br/>
            <u>https://replit.com/@yusuflovescats/CapybaraAPI#main.py</u>
        </div>
    );
};

export default View;