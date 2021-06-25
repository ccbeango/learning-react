import styled from 'styled-components';


export const HomeWrapper = styled.div`
  font-size: 50px;
  color: red;

  .banner {
    background: gray;
    li {
      color: chartreuse;
      &.active {
        color: red;
      }

      &:hover {
        color: white;
      }

      &::after {
        content: "a";
      }
    }
  }
`;

export const TitleWrapper = styled.h2`
  text-decoration: underline;
`;
