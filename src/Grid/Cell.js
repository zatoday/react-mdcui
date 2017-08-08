import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';


const propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.node
    ]),
    col: (props, propName) => checkCol(props[propName]),
    desktop: (props, propName) => checkCol(props[propName]),
    tablet: (props, propName) => checkCol(props[propName]),
    phone: (props, propName) => checkCol(props[propName]),
    order: (props, propName) => checkCol(props[propName]),
    alignTop: PropTypes.bool,
    alignMiddle: PropTypes.bool,
    alignBottom: PropTypes.bool,
};

const checkCol = (value) => {
    if ((typeof(value) != 'undefined') && (value < 1 || value > 12 || !Number.isInteger(value))) {
        return new Error('Cell from 1 to 12');
    }
};

const Cell = (props) => {
    let { className, children, col, desktop, tablet, phone, order, alignTop, alignMiddle, alignBottom, ...otherProps } = props;

    let cell = {};
    cell[`mdc-layout-grid__cell--span-${col}`] = col;
    cell[`mdc-layout-grid__cell--span-${desktop}-desktop`] = desktop;
    cell[`mdc-layout-grid__cell--span-${tablet}-tablet`] = tablet;
    cell[`mdc-layout-grid__cell--span-${phone}-phone`] = phone;
    cell[`mdc-layout-grid__cell--order-${order}`] = order;
    cell['mdc-layout-grid__cell--align-top'] = alignTop;
    cell['mdc-layout-grid__cell--align-middle'] = alignMiddle;
    cell['mdc-layout-grid__cell--align-bottom'] = alignBottom;

    let classes = classnames('mdc-layout-grid__cell', cell, className);

    return (
        <div className={classes} {...otherProps}>
            {children}
        </div>
    );
};

Cell.propTypes = propTypes;

export default Cell;
