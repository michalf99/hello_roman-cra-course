import React from 'react';
import { StyledDeleteButton } from './DeleteButton.styles';

const DeleteButton = (props) => <StyledDeleteButton {...props}>{props.children}</StyledDeleteButton>;

export default DeleteButton;
