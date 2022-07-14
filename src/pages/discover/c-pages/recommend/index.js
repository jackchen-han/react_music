import React, { memo, useEffect } from 'react';
import { connect, useDispatch, useSelector ,shallowEqual} from 'react-redux';
import { getTopBannerAction } from './store/actionCreator';

const HYRecommend = memo((props) => {
  // 组件和redux关联：获取数据和进行操作
  const { topBanners } = useSelector((state)=>({
    topBanners:state.recommend.topBanners
  }),shallowEqual);
  const dispatch = useDispatch()

  // 发送网络请求
  useEffect(()=>{
    dispatch(getTopBannerAction())
  },[dispatch])



  return (
    <div>
      <h2>HYRecommend：{topBanners.length}</h2>
    </div>
  )
})

export default HYRecommend


// const HYRecommend = memo((props) => {
//   const { getBanners,topBanners} = props
//   useEffect(()=>{
//     getBanners()
//   },[getBanners])
//   return (
//     <div>
//       <h2>HYRecommend：{topBanners.length}</h2>
//     </div>
//   )
// })

// const mapStateToProps = state =>{
//   console.log(state.recommend.topBanners)
//   return {
//     topBanners: state.recommend.topBanners
//   }
 
// }

// const mapDispatchToProps = dispatch =>({
//   getBanners:()=>{
//     dispatch(getTopBannerAction())
//   }
// })

// // 包装成组件
// export default connect(mapStateToProps,mapDispatchToProps)(HYRecommend);