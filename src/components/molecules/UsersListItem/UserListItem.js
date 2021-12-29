import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/atoms/Button/Button';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';

import { Wrapper, StyledAverage, StyledInfo } from './UserListItem.styles';

const UsersListItem = ({ userData: { id, name, average, attendance = '0%' }, deleteUser }) => {
  return (
    <Wrapper>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>{name}</p>
        <p>attendance {attendance}</p>
      </StyledInfo>
      <Button onClick={() => deleteUser(id)}>
        <DeleteIcon />
      </Button>
    </Wrapper>
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
