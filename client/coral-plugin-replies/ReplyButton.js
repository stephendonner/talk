import React, {PropTypes} from 'react';

import t from 'coral-framework/services/i18n';

import cn from 'classnames';
import styles from './ReplyButton.css';

const name = 'coral-plugin-replies';

const ReplyButton = ({onClick}) => {
  return (
    <button
      className={cn(`${name}-reply-button`, styles.button)}
      onClick={onClick}>
      <span className={cn(`${name}-label`, styles.label)}>
        {t('reply')}
      </span>
      <i className={`${name}-icon material-icons`}
        aria-hidden={true}>reply</i>
    </button>
  );
};

ReplyButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ReplyButton;
