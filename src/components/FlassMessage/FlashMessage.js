

import React from 'react';
import { render } from 'react-dom';
import FlashMessage from 'react-flash-message'

const FlashMessage = ({message, time}) => {
    return (
        <FlashMessage duration={time}>
            <strong>{message}</strong>
        </FlashMessage>
    )
  
}
export default FlashMessage;
