import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {

    let [alert, setAlert] = useState(true);
    let [inputText, setInputText] = useState("");
    let [amountAlert, setAmountAlert] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
        if (!Number.isInteger(+inputText)){
            setAmountAlert(true);
            let timer = setTimeout(()=>{setAmountAlert(false)}, 5000)
        }
      };

    useEffect(()=>{
        // use for complicated calculation
        // get data from server

        let timer = setTimeout(()=>{setAlert(false)}, 5000)
        
        // clean out previous
        // clean up function
        return ()=>{
            clearTimeout(timer);
        }
    }, [])

    let {id} = useParams();

    

    if (id > props.products.length){
        return (
            <div> invalid page </div>
        )
    }

    else return (
        <div className="container">
            {alert && <div id= 'alert' className="alert alert-warning"> 
            Buy in 5 seconds for 90% discount!! 
            </div>}
            <div className="row">
                <div className="col-md-6">
                <div className={'main-' + (props.products[id].id) } />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5"> {props.products[id].title} </h4>
                <p>{props.products[id].content}</p>
                <p>${props.products[id].price}</p>
                {amountAlert && <div id= 'alertAmount' className="alert alert-warning"> 
                Type only number!
                </div>}
                <input name="amount" onChange={handleChange} value={inputText}/>
                <div className="col-md-6"></div>
                <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div>
    )

    
}

export default Detail;