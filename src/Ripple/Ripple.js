import '@material/elevation/dist/mdc.elevation.css';
import {MDCRipple} from '@material/ripple/dist/mdc.ripple';
import {Component, cloneElement} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    primary: PropTypes.bool,
    accent: PropTypes.bool,
    className: PropTypes.string
};

class Ripple extends Component{

    modifyChildren(children, fatherClass) {

        let {className} = children.props;

        let classNames = classnames(
            className,
            fatherClass
        );

        return cloneElement(children, {
            ref: (ref) => {
                this.isDiv = ref;
            },
            className: classNames
        });
    }

    render(){

        let {children, primary, accent, className} = this.props;

        let fatherClass = classnames('mdc-ripple-surface',{
            'mdc-ripple-surface--primary': primary,
            'mdc-ripple-surface--accent': accent
        }, className);

        return this.modifyChildren(children, fatherClass);
    }

    componentDidMount(){
        MDCRipple.attachTo(findDOMNode(this.isDiv));
    }
}

Ripple.propTypes = propTypes;

export default Ripple;
