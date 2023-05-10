import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const SuperiorContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  width: max-content;
  padding: 20px;

  @media (max-width: 300px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    border: 1px solid blue;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Input = styled.input`
  border: none;
  padding-left: 10px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.black};
  }

  &:focus{
    outline: none;
  }
`;

export const InputExternal = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.green300};
  border-radius: 5px;
  display: flex;
`;

export const SearchButton = styled.button`
  background: ${({ theme }) => theme.colors.green300};
  border: none;
  padding: 5px;
  border-radius: 0 5px 5px 0;
  transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out;

  &:hover{
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.green100};
  }
`;
