import React, { Component } from 'react'

export default class ClassComponent extends Component {

    // 컴포넌트 생명주기
    // constructor -> render -> didmount(Dom 노드 초기화 및 데이터 fetch) -> 상태 변경시 did update(render도 발생) -> willunmount(타이머제거 및 요청 취소 및 구독 해제)
    // Constructor에서는 state 초기화 및 메서드 바인딩(bind)
    constructor(props){
        super(props);
        console.log('constructor');
        this.state = {date : new Date()};
        // this.handleClick한테 내 자신이 누군지 알려줘 -> 그 역할을 bind가 한다.
        // this.handleClick = this.handleClick.bind(this);
    };

    componentDidMount(){
        console.log('componentDidMount');
        this.timerId = setInterval(()=>this.tick(), 10000);
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
        clearInterval(this.timerId);
    }

    tick(){
        // console.log('tick');
        this.setState({date:new Date()})
    }

    //Arrow Function은 bind할 필요가 없음.
    handleClick=()=>{
        alert(this.state.date);
    }

  render() {
    console.log('render');
    return (
      <div>
        <h1 onClick={this.handleClick}>Hello, World!</h1>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}
