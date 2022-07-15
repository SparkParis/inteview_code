class Example extends React.Component {
  constructor() {
    super()
    this.state = {
      val: 0
    }
  }
  componentDidMount() {
    this.setState({ val: this.state.val + 1 })
    console.log(this.state.val)
    // 第 1 次 log
    this.setState({ val: this.state.val + 1 })
    console.log(this.state.val)
    // 第 2 次 log
    setTimeout(() => {
      this.setState({ val: this.state.val + 1 })
      console.log(this.state.val)
      // 第 3 次 log
      this.setState({ val: this.state.val + 1 })
      console.log(this.state.val)
      // 第 4 次 log
    }, 0)
  }
  render() {
    return null
  }
}

// 答：0,0,1,2