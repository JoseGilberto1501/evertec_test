
export const InputComponent = ( { value, onChange } ) => {
    return (        
            <input 
            type='text'
            value={value}
            onChange={onChange}
            placeholder='Hola Ingresa un valor'/>
    )
}