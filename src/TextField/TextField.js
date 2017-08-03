import React, {Component} from 'react';
import classnames from 'classnames';
import '@material/textfield/dist/mdc.textfield.css';
import PropTypes from 'prop-types';
import {MDCTextfield} from '@material/textfield/dist/mdc.textfield';

const propTypes = {
    className: PropTypes.string,
    fullWidth: PropTypes.bool,
    multiline: PropTypes.bool,
    box: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.node
    ])
};

class TextField extends Component{
    render(){
        let { className, type, fullWidth, multiline, box, dense, children, disabled, rows, cols, placeholder, id, label, ...otherProps } = {...this.props};

        let classes = classnames('mdc-textfield', {
            'mdc-textfield--fullwidth': fullWidth,
            'mdc-textfield--multiline': multiline,
            'mdc-textfield--box': box,
            'mdc-textfield--dense': dense,
            'mdc-textfield--disabled': disabled,
        }, className);

        return multiline ? (
            <div className={classes}  ref={(textfield) => { this.ElementTextfield = textfield; }} {...otherProps}>
                <textarea id={id} className="mdc-textfield__input" rows={rows || 8} cols={cols || 40} placeholder={placeholder} defaultValue={children} disabled={disabled} />
                {label && (<label htmlFor={id} className="mdc-textfield__label">{label}</label>)}
            </div>
        ) : (
            <div className={classes} ref={(textfield) => { this.ElementTextfield = textfield; }} {...otherProps}>
                <input id={id} type={type || 'text'} className="mdc-textfield__input" placeholder={placeholder} defaultValue={children} disabled={disabled} />
                {label && (<label htmlFor={id} className="mdc-textfield__label">{label}</label>)}
            </div>
        );
    }

    componentDidMount(){
        MDCTextfield.attachTo(this.ElementTextfield);
    }
}

TextField.propTypes = propTypes;

export default TextField;
