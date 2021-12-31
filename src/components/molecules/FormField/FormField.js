import React from 'react';
import PropTypes from 'prop-types';

import { Label } from 'components/atoms/Label/Label.styles';
import { Input } from 'components/atoms/Input/Input.styles';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  margin-bottom: 10px;

  ${Label} {
    margin: 5px 0;
  }
`;

const FormField = ({ onChange, value, label, name, id, type = 'text' }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} id={id} type={type} value={value} onChange={onChange} data-testid={label} />
    </Wrapper>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
