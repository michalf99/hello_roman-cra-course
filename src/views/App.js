import UsersList from 'components/organisms/UsersList/UsersList';
import React from 'react';

import { GlobalStyle } from 'assets/styles/globalStyle';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

const Wrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.lightGrey};
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
`;

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <UsersList />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
