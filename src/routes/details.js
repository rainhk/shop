import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem} from '../store'

function Detail(props) {

    let [alert, setAlert] = useState(true);
    let [tab, setTab] = useState(0);

    let items = useSelector((state)=> state.cartItems)
    let dispatch = useDispatch();

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
                <h4 className="pt-5"> {props.products[id].name} </h4>
                <p>{props.products[id].content}</p>
                <p>${props.products[id].price}</p>
                <Alert/>
                <div className="col-md-6"></div>
                <button className="btn btn-danger" onClick={()=>{
                        dispatch(addItem({id: props.products[id].id, name: props.products[id].name, count: 1}))
                    }
                }>주문하기</button> 
                </div>
            </div>

            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabInfo tab = {tab} products = {props.products}/>
            
        </div>
        
    )


function TabInfo({tab, products}){

    let [fade, setFade] = useState('');
    
    useEffect(()=>{
        let fadeout = setTimeout(()=>{setFade('end')}, 100)
        
        return ()=>{
            clearTimeout(fadeout)
            setFade('')
        }

    }, [tab])

    // ` back tick
    return <div className= {`start ${fade}` }>
        {[ <div> {products[0].name} </div>, <div>info1</div>, <div>info2</div> ][tab]}
        </div>

    // simple way
    // return [ <div>info0</div>, <div>info1</div>, <div>info2</div> ][tab]
}

}

function Alert(){
    
    let [num, setNum] = useState('')

    useEffect(()=>{
      if (isNaN(num) == true){
        alert('Please only enter numbers')
      }
    }, [num])
  
    return (
      <input onChange={(e)=>{ setNum(e.target.value) }} />
    )
}

export default Detail;