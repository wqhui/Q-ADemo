import React from 'react';

class Bundle extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // 默认为空
      mod: null
    }
  }


  componentWillMount() {
    // 加载初始状态
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  load(props) {
    // 重置状态
    this.setState({
      mod: null
    });
    var that=this;
    // 传入组件的组件
    setTimeout(function(){
      props.load((mod) => {
        that.setState({
          // handle both es imports and cjs
          mod: mod.default ? mod.default : mod
        });
      });
    },1200)
  }

  render() {
    // if state mode not undefined,The container will render children
    // return this.state.mod ? this.props.children(this.state.mod) : null;
    return this.props.children(this.state.mod);
  }
}


export default Bundle;