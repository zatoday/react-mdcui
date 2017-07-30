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

const LayoutGrid = (props) => {
    let { className, children, ...otherProps } = props;

    let classes = classnames('mdc-layout-grid', className);

    return (
        <div className={classes} {...otherProps}>
            {children}
        </div>
    );
};

LayoutGrid.propTypes = propTypes;

export default LayoutGrid;
