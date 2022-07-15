// hoc(high order component)高阶组件，是react机制形成的一种组件模式。本身不是一种组件，是增强函数，
// 输入元组件实现新的增强组件，高阶组件的主要作用是实现代码复用，操作状态和参数


// 1、属性代理的方式：返回一个组件，基于被包裹的组件进行功能增强,可以转换受控组件，以及对组件进行一层封装
function proxyHoc(Comp) {
  return class extends React.Component {
    render() {
      const newProp = {
        name: 'ftt',
        age: 12
      }
      return <Comp {...props} {...newProp}></Comp>
    }
  }
}

//2.反向继承 ：返回一个组件继承与被包裹的组件,性能监控
function IIHOC(Comp) {
  return class extends Comp {
    render() {
      return super.render();
    }

  }
}

// 渲染劫持（render Highjacking）：条件渲染：根据不同的条件渲染组件
function withLoading(Comp) {
  return class extends Comp {
    render() {
      if (this.props.isLoading) {
        return <Loading></Loading>
      } else {
        return super.render()
      }
    }
  }
}
