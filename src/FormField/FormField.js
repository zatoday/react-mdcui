import React from 'react';
import classnames from 'classnames';
import '@material/form-field/dist/mdc.form-field.css';
import PropTypes from 'prop-types';

const propTypes = {
    className: PropTypes.string,
    alignEnd: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.node
    ])
};

const FormField = (props) => {
    let { className, alignEnd, children, ...otherProps } = props;

    let classes = classnames('mdc-form-field', {
        'mdc-form-field--align-end': alignEnd
    }, className);

    return (
        <div className={classes} {...otherProps}>
            {children}
        </div>
    );
};

FormField.propTypes = propTypes;

export default FormField;
