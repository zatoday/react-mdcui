import React from 'react';
import classnames from 'classnames';
import '@material/layout-grid/dist/mdc.layout-grid.css';
import PropTypes from 'prop-types';


const propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.node
    ])
};

const LayoutGridCell = (props) => {
    let columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let { className, children, ...otherProps } = props;

    let cell = {};

    for (let i of columns) {
        cell[`mdc-layout-grid__cell--span-${i}`] = eval('otherProps.cell_'+i);
        delete otherProps['cell_'+i];
    }

    let classes = classnames('mdc-layout-grid__cell', cell, className);

    return (
        <div className={classes} {...otherProps}>
            {children}
        </div>
    );
};

LayoutGridCell.propTypes = propTypes;

export default LayoutGridCell;
