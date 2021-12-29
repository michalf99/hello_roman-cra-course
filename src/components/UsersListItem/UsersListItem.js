import React from 'react';
import PropTypes from 'prop-types';

import styles from './UsersListItem.module.scss';
import globalStyles from 'assets/GlobalStyles.module.scss';

const UsersListItem = ({ userData: { name, average, attendance = '0%' } }) => {
  return (
    <li className={styles.container}>
      <div className={globalStyles.box}></div>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>{attendance}</p>
      </div>
      <button>x</button>
    </li>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
