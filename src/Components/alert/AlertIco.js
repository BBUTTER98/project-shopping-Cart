import { BsFillCheckSquareFill } from "react-icons/bs";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { BsFillExclamationCircleFill } from "react-icons/bs";
function AlertIco({type}){
    switch(type){
        case 'warning':
            return <BsFillExclamationTriangleFill />
        case 'drop':
            return <BsFillExclamationCircleFill />
        default:
            return <BsFillCheckSquareFill />
    }
}
export default AlertIco;