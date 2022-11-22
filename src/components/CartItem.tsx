import {useShoppingCart} from "../context/ShoppingCartContext";
import storeItems from "../data/items.json"
import {Button, Stack} from "react-bootstrap";
import {formatCurrency} from "../utils/formatCurrency";

type CartItemProps = {
    quantity: number
    id: number
}

export function CartItem({quantity, id}: CartItemProps) {
    const {removeFromCart} = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null
    return (
        <div>
            <Stack className="d-flex align-items-center" direction="horizontal" gap={2}>
                <img src={item.imgUrl} style={{
                    width: "125px",
                    height: "75px",
                    objectFit: "cover"
                }}/>
                <div className="me-auto">
                    <div>
                        {item.name} {" "} {quantity > 1 && (
                        <span className="text-muted" style={{fontSize: "0.65rem"}}>x{quantity}</span>
                    )}
                    </div>
                    <div className="text-muted" style={{fontSize: "0.65rem"}}>
                        {formatCurrency(item.price)}
                    </div>
                </div>
                <div>{formatCurrency(item.price * quantity)}</div>
                <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>
                    &times;
                </Button>
            </Stack>
        </div>
    );
}
