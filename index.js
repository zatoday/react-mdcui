import React from 'react';
import Dom from 'react-dom';
import {Button, FormField} from './lib';
import Grid from './src/Grid/Grid';
import Cell from './src/Grid/Cell';

Dom.render(
    <Grid alignRight>
        <Cell col={5} alignBottom>
            <FormField alignEnd>
                <Button raised dense ripplePrimary>Co ripple nha</Button>
                <Button raised dense>Khong Ripple day nha</Button>
            </FormField>
        </Cell>
    </Grid>,
    document.querySelector('#root')
);

