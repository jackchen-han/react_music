import React, { Fragment, memo } from 'react'
import { FooterWrapper , FooterLeft, FooterRight} from './style'
import { footerLinks } from '../../common/local-data'

const HYAppFooter = memo(() => {
  return (
    <FooterWrapper >
      <div className='content wrap-v2'>
         <FooterLeft>
        <div className='firstCol'>
          {
            footerLinks.map((item,index)=>{
              return (
                <Fragment key={index} >
                  <a href={item.link}>{item.title}</a>
                  <span>|</span>
                </Fragment>
              )
            })
          }
        </div>
        <div>
          <span>网易公司版权所有©1997-2022</span>
          <span>杭州乐读科技有限公司运营：</span>
          <a href="/#">浙网文[2021] 1186-054号</a>
        </div>
        <div>
          <a href="/#">粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站</a>
          <a href="/#">
            <span>浙公网安备 33010902002564号</span>
          </a>
        </div>
        <div>
          <span>互联网宗教信息服务许可证：浙（2022）0000120</span>
        </div>
      </FooterLeft>
      <FooterRight>222</FooterRight>
      </div>
     
    </FooterWrapper>
  )
})

export default HYAppFooter