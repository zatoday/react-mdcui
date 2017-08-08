import {Component, cloneElement} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    transition: PropTypes.bool,
    className: PropTypes.string,
    z: (props, propName) => checkRange(props[propName]),
};

const checkRange = (value) => {
    if ((typeof(value) != 'undefined') && (value < 1 || value > 24 || !Number.isInteger(value))) {
        return new Error('Elevation not found');
    }
};

class Elevation extends Component{

    modifyChildren(children, fatherClass) {

        let {className} = children.props;

        let classNames = classnames(
            className,
            fatherClass
        );

        return cloneElement(children, {
            className: classNames
        });
    }

    render(){

        let {children, transition, z, className} = this.props;

        let fatherClass = classnames(`mdc-elevation--z${z}`, {
            'mdc-elevation-transition': transition
        }, className);

        return this.modifyChildren(children, fatherClass);
    }
}

Elevation.propTypes = propTypes;

export default Elevation;
