import styled from 'styled-components'

const CustomButton = styled.button`
  border: 2px solid #f3aa4e;
  border-radius: 26px;
  padding: 10px 20px;
  font-size: 16px;
  margin: 0;
  margin-right: 24px;
  background-color: ${props => (props.isSelected ? '#f3aa4e' : '#000000')};
  color: ${props => (props.isSelected ? '#131213' : '#ffffff')};
  cursor: pointer;
`
export default CustomButton
