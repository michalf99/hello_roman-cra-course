import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 20px 0;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #ddd;
  }
`;

export const StyledAverage = styled.div`
  display: grid;
  place-items: center;
  width: 35px;
  height: 35px;
  margin-right: 20px;
  background: ${({ theme, value }) => {
    if (value > 4) {
      return theme.colors.success;
    } else if (value > 3) {
      return theme.colors.warning;
    } else {
      return theme.colors.error;
    }
  }};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  border-radius: 50%;
`;

export const StyledInfo = styled.div`
  margin-right: 12px;

  p:first-child {
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: bold;
  }

  p:last-child {
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
