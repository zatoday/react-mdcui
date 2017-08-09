import {Component, Children} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    className: PropTypes.string,
};

class Theme extends Component{
    render(){
        return Children.only(this.props.children);
    }
}

Theme.propTypes = propTypes;

export default Theme;
