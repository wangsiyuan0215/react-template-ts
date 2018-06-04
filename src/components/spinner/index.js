/**
 * Created by WangSiYuan at 2018/04/27
 */
import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui';

const defaultSizes = ['small', 'medium', 'large'];

const mapValuesForSize = {
    [defaultSizes[0]]: 30,
    [defaultSizes[1]]: 50,
    [defaultSizes[2]]: 70
};

const spinner = (props) => {
    const { size = defaultSizes[1], ...restProps } = props;
    return (
        <React.Fragment>
            <CircularProgress size={mapValuesForSize[size]} {...restProps} />
        </React.Fragment>
    );
};

spinner.propTypes = {
    size: PropTypes.oneOfType([
        PropTypes.oneOf(defaultSizes),
        PropTypes.number
    ])
};

export default spinner;
