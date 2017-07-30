import React from 'react';
import classnames from 'classnames';
import '@material/form-field/dist/mdc.form-field.css';
import PropTypes from 'prop-types';

const propTypes = {
    className: PropTypes.string,
    alignEnd: PropTypes.bool,
    fullwidth: PropTypes.bool,
    multiline: PropTypes.bool,
    box: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.node
    ])
};

const FormField = (props) => {
    let { className, alignEnd, fullwidth, multiline, box, children, ...otherProps } = props;

    let classes = classnames('mdc-form-field', {
        'mdc-form-field--align-end': alignEnd,
        'mdc-textfield--fullwidth': fullwidth,
        'mdc-textfield--multiline': multiline,
        'mdc-textfield--box': box
    }, className);

    return (
        <div className={classes} {...otherProps}>
            {children}
        </div>
    );
};

FormField.propTypes = propTypes;

export default FormField;
