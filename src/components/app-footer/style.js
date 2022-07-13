import styled from 'styled-components';

export const FooterWrapper = styled.div`
  height: 172px;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
  div{
    display:flex;
    justify-content: space-between;
  }

`
export const FooterLeft = styled.div`
  width:520px;
  display:flex;
  flex-direction: column;
  flex-wrap: wrap;
  line-height: 24px;
  padding-top: 15px;
  color:#666;
  .firstCol {
    display: flex;
    justify-content: space-around;
    span{
      color:#c2c2c2;
      margin-right: 23px;
    }
    a{
      color:#999;
      cursor: pointer;
      margin-right: 2px;
    }
  }
`

export const FooterRight = styled.div`

`