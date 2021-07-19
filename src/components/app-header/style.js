import styled from 'styled-components';

export const HeaderWarpper = styled.div`
  height: 75px;
  font-size: 14px;
  background: #242424;
  .content {
    height: 70px;
    display: flex;
    justify-content: space-between;
  }
  .divider {
    height: 5px;
    background: #C20C0C;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: 9999px;
  }
  .select-list {
    display: flex;

    .select-item {
      position: relative;
      line-height: 70px;

      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }

      :last-of-type a {
        ::after {
          position: absolute;
          top: 20px;
          right: -15px;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${require("@/assets/img/sprite_01.png").default});
          background-position: -190px 0;
        }
      }

      &:hover a, a.active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }

      a.active::after {
        position: absolute;
        display: inline-block;
        content: "";
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-image: url(${require("@/assets/img/sprite_01.png").default});
        background-position: -226px 0;
      }
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;
    input::placeholder {
      font-size: 12px;
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
    background-color: transparent;
  }
`;