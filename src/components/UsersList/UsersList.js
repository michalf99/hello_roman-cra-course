import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/UsersListItem/UsersListItem';

import styles from 'assets/GlobalStyles.module.scss';
import containerStyles from './UsersList.module.scss';

const UsersList = () => {
  return (
    <div
      className={`${containerStyles.container} ${
        false ? containerStyles.blackBorder : containerStyles.redBorder
      }`}
    >
      <div className={styles.box}></div>
      <ul>
        {users.map((userData) => (
          <UsersListItem userData={userData} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
