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

const LayoutGridInner = (props) => {
    let { className, children, ...otherProps } = props;

    let classes = classnames('mdc-layout-grid__inner', className);

    return (
        <div className={classes} {...otherProps}>
            {children}
        </div>
    );
};

LayoutGridInner.propTypes = propTypes;

export default LayoutGridInner;
