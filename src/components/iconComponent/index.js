/**
 * 使用方法：
 *      <Icon className={{}} unicode={'\ue62c'} />
 *      请注意其中 unicode 属性使用时需要将 icon 的 unicode 码以字符串的方式传入
 *      否则，如 unicode="/ue62c" 时会被转义。
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const IconComponent = (props) => {
    const { unicode, className = {} } = props;
    const finalClasNames = classnames('iconfont', className);
    return (
        <i className={finalClasNames}>{unicode}</i>
    );
};

IconComponent.propTypes = {
    unicode: PropTypes.string,
    className: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ])
};

export default IconComponent;
