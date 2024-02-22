import React, { useState } from 'react';
import { InputComponent } from './InputComponent';
import { ButtonComponent } from './ButtonComponent';
import { AlertComponent } from './AlertComponent';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value !== '') {
      setShowAlert(false);
    }
  };

  const handleButtonClick = () => {
    setShowAlert(true);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <h1>Test Evertec</h1>
      <h2>Jose Gilberto Zuniga Vargas</h2>
      <br/>
      <InputComponent value={inputValue} onChange={handleInputChange} />
      <ButtonComponent onClick={handleButtonClick} disabled={inputValue === ''} />
      {showAlert && <AlertComponent onClose={handleAlertClose} message={inputValue}/>}
    </div>
  );
}

export default App;
