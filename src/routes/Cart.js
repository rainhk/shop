import {Table} from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Cart(){

    let items = useSelector((state)=> state.cartItems)
    console.log(items)

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                {
                    items.map((a, i)=>{
                        return(
                            <CartItems items={items[i]} i={i}></CartItems>
                        )
                    })
                }
            </Table> 
        </div>
    )
}


function CartItems({items, index}) {
    return (
        <tbody>
            <tr>
            <td>{ items.id }</td>
            <td>{ items.name }</td>
            <td>{ items.count }</td>
            <td> change </td>
            </tr>
        </tbody>
    )
}

export default Cart