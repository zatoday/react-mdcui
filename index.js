import React from 'react';
import Dom from 'react-dom';
import Grid from './src/Grid/Grid';
import Cell from './src/Grid/Cell';
import TextField from './src/TextField/TextField';

Dom.render(
    <Grid fixedWidth alignRight>
        <Cell col={5} alignBottom>
            <TextField dense id="textInput" label="Input ZA">ZA</TextField>
        </Cell>
    </Grid>,
    document.querySelector('#root')
);

