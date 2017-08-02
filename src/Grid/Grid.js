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
    ]),
    fixedWidth: PropTypes.bool,
    alignLeft: PropTypes.bool,
    alignRight: PropTypes.bool
};

const Grid = (props) => {
    let { className, fixedWidth, children, alignLeft, alignRight, ...otherProps } = props;

    let classes = classnames('mdc-layout-grid', {
        'mdc-layout-grid--fixed-column-width': fixedWidth,
        'mdc-layout-grid--align-left': alignLeft,
        'mdc-layout-grid--align-right': alignRight
    },  className);

    let classInner = classnames('mdc-layout-grid__inner', className);

    return (
        <div className={classes} {...otherProps}>
            <div className={classInner} {...otherProps}>
                {children}
            </div>
        </div>
    );
};

Grid.propTypes = propTypes;

export default Grid;
