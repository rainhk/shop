import { useParams } from "react-router-dom";

function Detail(props) {

    let {id} = useParams();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                {/* <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" /> */}
                <div className={'main-' + (props.products[id].id) } />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5"> {props.products[id].title} </h4>
                <p>{props.products[id].content}</p>
                <p>${props.products[id].price}</p>
                <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div>
    )
}

export default Detail;