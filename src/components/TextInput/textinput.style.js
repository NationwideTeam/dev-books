import styled from 'styled-components';

export const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 322px;
  background-color: white;
`;

export const InputLabel = styled.label`
  margin-bottom: 10px;
  font-size: 12px;
  color: #767676;
`;

export const InputText = styled.input`
  font-size: 14px;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 8px;
  ::placeholder {
    color: #dbdbdb;
    font-size: 14px;
    border-bottom: 1px solid #dbdbdb;
    padding-bottom: 8px;
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid #3e7c17;
    background-color: #ffffff;
  }
  &:active {
    outline: none;
    border-bottom: 1px solid #3e7c17;
    background-color: #ffffff;
  }
`;