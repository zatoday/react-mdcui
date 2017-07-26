import React, {PureComponent} from 'react';
import classnames from 'classnames';
import {MDCCheckboxFoundation} from '@material/checkbox/dist/mdc.checkbox';
import {getCorrectEventName} from '@material/animation/dist/mdc.animation';
import '@material/checkbox/dist/mdc.checkbox.css';

export default class Checkbox extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            classes: [],
            rippleCss: [],
            checkedInternal: false,
            disabledInternal: false,
            indeterminateInternal: false
        };
        this.foundation = this.checkboxFoundation.bind(this);
    }

    changeHandler(evt) {
        // this.props.toggleChecked(evt);
    }

    componentDidMount() {
        this.foundation().init();
    }

    render(){
        return (
            <div ref={(el) => { this.root = el; }} className={classnames('mdc-checkbox', this.state.classes)}>
                <input ref={(el) => { this.nativeCb = el; }} type="checkbox" className="mdc-checkbox__native-control" onChange={this.changeHandler.bind(this)} />
                <div className="mdc-checkbox__background">
                    <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                        <path className="mdc-checkbox__checkmark__path" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"></div>
                </div>
            </div>
        );
    }

    checkboxFoundation(){
        let foundation = new MDCCheckboxFoundation({
            addClass: className => {
                this.setState(prevState => ({
                    classes: [...prevState.classes, className]
                }));
            },
            removeClass: className => {
                this.setState(prevState => ({
                    classes: [...prevState.classes, prevState.classes.filter((k, v) => v != className)]
                }));
            },
            registerAnimationEndHandler: handler => {
                if (this.root) {
                    this.root.addEventListener(getCorrectEventName(window, 'animationend'), handler);
                }
            },
            deregisterAnimationEndHandler: handler => {
                if (this.root) {
                    this.root.removeEventListener(getCorrectEventName(window, 'animationend'), handler);
                }
            },
            registerChangeHandler: handler => {
                if (this.nativeCb) {
                    this.nativeCb.addEventListener('change', handler);
                }
            },
            deregisterChangeHandler: handler => {
                if (this.nativeCb) {
                    this.nativeCb.removeEventListener('change', handler);
                }
            },
            getNativeControl: () => {
                if (!this.nativeCb) {
                    throw new Error('Invalid state for operation');
                }
                return this.nativeCb;
            },
            forceLayout: () => {
                if (this.nativeCb) {
                    this.nativeCb.offsetWidth;
                }
            },
            isAttachedToDOM: () => Boolean(this.nativeCb),
        });
        return foundation;
    }

    componentDidUpdate() {
        if (this.nativeCb) {
            this.nativeCb.indeterminate = this.state.indeterminateInternal;
        }
        if (this.root) {
            this.state.rippleCss.forEach((v, k) => {
                this.root.style.setProperty(k, v);
            });
        }
    }
}
