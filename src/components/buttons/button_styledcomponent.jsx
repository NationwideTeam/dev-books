import styled, { css } from "styled-components";

//버튼 사이즈별 css
const Sizes = {
  sm: css`
    height: 28px;
    width: 56px;
    border-radius: 26px;
    font-size: 12px;
    font-weight: 400;
  `,
  ms: css`
    height: 32px;
    width: 90px;
    border-radius: 32px;
    font-size: 20px;
    font-weight: 500;
  `,
  md: css`
    height: 34px;
    width: 120px;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 500;
  `,
  lg: css`
    height: 44px;
    width: 322px;
    border-radius: 44px;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
  `,
};

function Button(props) {
  const sizeStyle = Sizes[props.size];

  return (
    <StyledButton disabled={props.disabled} sizeStyle={sizeStyle}>
      {props.children}
    </StyledButton>
  );
}
//전개구문:
// function Button({ disabled, children, size }) {
//   const sizeStyle = Sizes[size];

//   return (
//     <StyledButton disabled={disabled} sizeStyle={sizeStyle}>
//       {children}
//     </StyledButton>
//   );
// }
// 함수형 컴포넌트로 다 할 수 있다.! => props

// 버튼 디폴트값
const StyledButton = styled.button`
  ${(props) => props.sizeStyle}

  border: none;
  cursor: pointer;
  background: #f26e22;
  color: #ffffff;

  &:active,
  &:hover,
  &:focus {
    opacity: 0.5;
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

export default Button;
