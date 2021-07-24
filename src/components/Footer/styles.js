import styled from 'styled-components';

export const Container = styled.div`
  p {
    color: #999;
    font-size: 12px;
  }
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #ddd;
  padding: 20px;

  text-transform: uppercase;

  a {
    padding: 14px;
    border-radius: 4px;
    border: none;
    background: #2166d6;
    color: #fff;
    margin: 2px;
    cursor: pointer;
    flex: 1;
  }

  a:hover {
    background-color: #6ea1f4;
  }
`;
