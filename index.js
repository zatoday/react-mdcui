import React from 'react';
import Dom from 'react-dom';
import Button from './src/Button/Button';

Dom.render(
    <div>
        <Button raised dense ripplePrimary>Co ripple nha</Button>
        <Button raised dense>Khong Ripple day nha</Button>
    </div>
    ,
    document.querySelector('#root')
);
