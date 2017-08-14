import React from 'react';
import Dom from 'react-dom';
import {Grid, Cell, TextField, Ripple, Elevation, Button} from '../src';

Dom.render(
    <Grid fixedWidth alignRight>
        <Cell col={5} alignBottom>
            <TextField dense id="textInput" label="Input ZA">ZA</TextField>
            <Button accent>Click Here</Button>
        </Cell>
        <Elevation z={22} transition>
            <Ripple accent>
                <Button>ZA</Button>
            </Ripple>
        </Elevation>
    </Grid>,
    document.querySelector('#root')
);

