import React, {Component} from 'react';
import classnames from 'classnames';
import '@material/button/dist/mdc.button.css';
import PropTypes from 'prop-types';
import {MDCRipple} from '../Ripple';

const propTypes = {
    ripple: PropTypes.bool,
    ripplePrimary: PropTypes.bool,
    rippleAccent: PropTypes.bool,
    dense: PropTypes.bool,
    raised: PropTypes.bool,
    compact: PropTypes.bool,
    primary: PropTypes.bool,
    accent: PropTypes.bool,
    className: PropTypes.string,
    component: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.func
    ]),
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    href: PropTypes.string
};

class Button extends Component{
    constructor(props){
        super(props);
        this.state = {
            ripple: false
        };
    }
    render(){
        let {dense, raised, compact, primary, accent, className, children, component, href, ripple, ripplePrimary, rippleAccent, ...otherProps} = {...this.props};
        let classes = classnames('mdc-button', {
            'mdc-button--accent': accent,
            'mdc-button--compact': compact,
            'mdc-button--dense': dense,
            'mdc-button--primary': primary,
            'mdc-button--raised': raised,
            'mdc-ripple-surface': ripple || ripplePrimary || rippleAccent,
            'mdc-ripple-surface--primary': ripplePrimary,
            'mdc-ripple-surface--accent': rippleAccent

        }, className);
        return React.createElement(component || (href ? 'a' : 'button'),
            {
                className: classes,
                href,
                ...otherProps,
                ref: (button) => { this.ElementButton = button; }
            }, children
        );
    }

    componentDidMount(){
        if(this.props.ripple || this.props.ripplePrimary || this.props.rippleAccent){
            MDCRipple.attachTo(this.ElementButton);
        }
    }
}

Button.propTypes = propTypes;

export default Button;
