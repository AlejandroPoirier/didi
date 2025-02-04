import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useCountry } from "../context/countryContext";

function SmsSender({ smsType }: any) {
  const country = useCountry().code;
  const [phoneNumber, setPhoneNumber] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  function resetMessageStatus () {
    setMessageSent(false);
    setPhoneNumber('');
    setIsValid(false);
    return false;
  }

  function handleOnChange(value: string) {
    setPhoneNumber(value);

    if(value.length > 8 ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }
  
  function sendMessage() {
    let url = '';

    if (String(smsType) === "RidesSmsCTA") {
      url = 'https://didi.mainserver.com.br/api/twilio/message/rides/'+ '+' + phoneNumber;
    } else {
      url = 'https://didi.mainserver.com.br/api/twilio/message/food/'+ '+' + phoneNumber;
    }

    fetch(url, {
      method: 'GET',
      mode: 'no-cors'
    })
      .then(res => {
        setMessageSent(true);
        return false;
      });
  }

  return (
    <div className="py-2">
      <PhoneInput 
        country={country} 
        enableSearch={true} 
        autoFormat={true} 
        containerStyle={{width:'50px'}} 
        inputStyle={{width: '235px', border:`1px solid ${isValid ? '#CBD5E0' : '#EF4444'}`}} 
        value={phoneNumber}
        onChange={value => handleOnChange(value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <div>
        {isValid && isFocused && (
          <div className="text-green-500 mt-2 text-sm">Numero OK</div>
        )}
        {!isValid && isFocused && (
          <div className="text-red-500 mt-2 text-sm">Checa numero de celular</div>
        )}
        {messageSent ? (
          <div className='max-w-325px'>
            <button
              className='hover:bg-orange-700 active:bg-orange-900 lg:text-xs xl:text-base border-transparent text-white font-bold rounded-full bg-orange-primary text-lg md:text-base my-4 lg:ml-4 xl:ml-0 py-2 px-6 bg-orange hover:cursor-pointer max-w-235px'
              type='button'
              onClick={resetMessageStatus}
            >
              Enlace enviado a tu celular!
            </button>
          </div>
        ) : (
          <button
            className={`hover:bg-orange-700 active:bg-orange-900 ${
              !isValid ? 'disabled:border-red-950 disabled:opacity-75' : ''
            } lg:text-xs xl:text-base border-transparent text-white font-bold rounded-full bg-orange-primary text-lg md:text-base my-4 lg:ml-4 xl:ml-0 py-2 px-6 bg-orange hover:cursor-pointer max-w-235px`}
            type='button'
            onClick={sendMessage}
              disabled={!isValid}>
              {messageSent ? "Sending..." : "Descargar en mi celular"}
            </button>
          )}
        </div>
    </div>
  );
}

export default SmsSender;