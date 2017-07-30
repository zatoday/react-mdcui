import React from 'react';
import Dom from 'react-dom';
import {Button, FormField} from './lib';
import LayoutGrid from './src/LayoutGrid/layoutGrid';
import LayoutGridInner from './src/LayoutGrid/layoutGridInner';
import LayoutGridCell from './src/LayoutGrid/layoutGridCell';

Dom.render(
    <div>
        <LayoutGrid>
            <LayoutGridInner>
                <LayoutGridCell cell_10>
                    <FormField alignEnd>
                        <Button raised dense ripplePrimary>Co ripple nha</Button>
                        <Button raised dense>Khong Ripple day nha</Button>
                    </FormField>
                </LayoutGridCell>
            </LayoutGridInner>
        </LayoutGrid>
    </div>
    ,
    document.querySelector('#root')
);

