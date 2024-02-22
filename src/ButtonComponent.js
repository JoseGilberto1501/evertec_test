export const ButtonComponent = ({ onClick, disabled }) => {
    return (
      <button 
            onClick={onClick} 
            disabled={disabled}>
        Mostrar Alerta
      </button>
    );
  
}