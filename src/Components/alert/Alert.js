import AlertIco from "./AlertIco";
function Alert(props){
    const { message, alertSpecific, handleClick, type} = props;
    const {keyName, status} = alertSpecific;
    const alertClassName = `alert ${type}`;
    return(
        <div 
            className={alertClassName}
            style={{
            display: status ?  "flex" : "none",
            }}
            onClick={()=>{
                handleClick(keyName);
            }}
        >
            <div className="content">
                {message}
            </div>
            <div className="icon">
                {<AlertIco type={type} />}
            </div>
        </div>
    )
}
export default Alert;