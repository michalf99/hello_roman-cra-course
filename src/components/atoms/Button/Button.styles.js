import styled from 'styled-components';

export const StyledButton = styled.button`
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
  background-color: ${({ theme: { colors } }) => colors.grey};
  border-radius: 50%;
  border: none;
  color: ${({ theme: { colors } }) => colors.white};
  margin-right: 10px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    margin-top: 2px;
  }
`;
