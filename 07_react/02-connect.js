// 将store上的状态转化为内层傻瓜组件的prop
function mapStateToProps(state, ownProps) {
  return {
    value: state[ownProps.属性名称]   //获取属性名称的值
  }
}

//把内层傻瓜组件的用户动作转化为派送给store中的动作
function mapDispatchToProps(dispatch, ownProps) {
  return {
    onIncrement: () => {
      dispatch(Actions.increment(ownProps.caption))
    },
    onDecrement: () => {
      dispatch(Actions.decrement(ownProps.caption))
    }
  }
} 