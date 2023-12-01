import { useDispatch } from "react-redux";
import { addToCartAction, addToCompare } from "../../redux/reducers/shopReducer";
import 'alertifyjs/build/css/alertify.css';
import { useNavigate } from "react-router-dom";
import alertify from 'alertifyjs';

export default function ButonsProductDetailPage({ product }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <>
            <button className="btn btn-dark mr-4 mb-5 text-white" onClick={() => {
                dispatch(addToCompare(product));
                navigate('/compare')
            }}>
                ADD TO COMPARE
            </button>
            <button className="btn btn-dark text-white" onClick={() => {
                const productCart = { ...product, quantityInCart: 1 };
                const action = addToCartAction(productCart);
                dispatch(action);
                alertify.success('Added to cart successfully!');
            }}>
                ADD TO CART
            </button>
        </>
    )
}
