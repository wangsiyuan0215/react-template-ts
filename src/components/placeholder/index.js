/**
 * Created by wangsiyuan on 27/04/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui';

import styles from './style.placeholder';

class placeholder extends React.Component {
    static propTypes = {
        delayMs: PropTypes.number,
        fallback: PropTypes.element,
        className: PropTypes.string
    };

    static defaultProps = {
        className: ''
    };

    constructor (props) {
        super(props);
        this.state = {
            ready: false
        };
    }

    componentDidMount () {
        setTimeout(() => {
            this.setState({
                ready: true
            });
        }, this.props.delayMs);
    }

    shouldComponentUpdate () {
        return true;
    }

    setPlaceholder = () => {
        const { classes, children, className, fallback } = this.props;
        const _className = classnames(classes.wrapper,
            className,
            children && children.props && children.props.className || null);
        const content = fallback || 'this is a placeholder';
        return (
            <div className={_className}>
                {content}
            </div>
        );
    };

    render () {
        return this.state.ready ? this.props.children : this.setPlaceholder();
    }
}

export default withStyles(styles)(placeholder);
