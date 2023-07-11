import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeName, changeStock, increaseAge } from '../store'

function Cart(){

    let items = useSelector((state)=> state.cartItems)
    let user = useSelector((state)=> state.user)
    let dispatch = useDispatch()
    return (
        <div>
            {user.name}'s cart, age {user.age}
            <button onClick={()=>{
                dispatch(increaseAge())
            }}>+</button>
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
                    // show all items on cart site
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
    let dispatch = useDispatch()
    return (
        <tbody>
            <tr>
            <td>{ items.id }</td>
            <td>{ items.name }</td>
            <td>{ items.count }</td>
            <td> <button onClick={()=>{
                dispatch(changeStock(items.id))
            }}>+</button> </td>
            </tr>
        </tbody>
    )
}

export default Cart