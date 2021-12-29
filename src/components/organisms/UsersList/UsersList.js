import React, { useState } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UserListItem';
import { Wrapper, StyledList } from './UsersList.styles';

const UsersList = () => {
  const [users, setUsers] = useState(usersData);

  const deleteUser = (id) => {
    const filteredUser = users.filter((user) => user.id !== id);
    setUsers(filteredUser);
  };

  return (
    <Wrapper>
      <StyledList>
        {users.map((userData, index) => (
          <UsersListItem key={index} userData={userData} deleteUser={deleteUser} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
