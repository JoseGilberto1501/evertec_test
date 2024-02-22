export const AlertComponent = ({ onClose, message }) =>{
    return(
        <div className="alert">
            <span className="close"
            onClick={onClose}>
            X
            </span>
            ¡Alerta! Usted digito: {message}
        </div>
    );
}