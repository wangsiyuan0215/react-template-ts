import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';

console.log(window.localLanguage);

class Dashboard extends React.Component {
    static propTypes = {
        demoString: PropTypes.string
    };
    render () {
        return (
            <div>Dashboard {this.props.demoString}</div>
        );
    }
}

const mapStatesToProps = ({ dashboard }) => ({ ...dashboard });

export default connect(mapStatesToProps, null)(Dashboard);
