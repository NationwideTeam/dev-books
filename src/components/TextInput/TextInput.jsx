import React from 'react';
import {
  TextInputContainer,
  InputLabel,
  InputText,
} from './textinput.style';

export const TextInput = (props) => {
  return (
    <TextInputContainer>
      <InputLabel htmlFor={props.for}>{props.label}</InputLabel>
      <InputText
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
      />
    </TextInputContainer>
  );
};
