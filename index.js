import React from 'react';
import Dom from 'react-dom';
import {Grid, Cell} from './src/Grid';
import {TextField} from './src/TextField';
import {Ripple} from './src/Ripple';
import {Elevation} from './src/Elevation';
import {Button} from './src/Button';
import {Theme} from './src/Theme';

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
        <Theme primary-on-dark>
            <Button className="mdc-theme--primary-bg mdc-theme--accent">ZA</Button>
        </Theme>
    </Grid>,
    document.querySelector('#root')
);

