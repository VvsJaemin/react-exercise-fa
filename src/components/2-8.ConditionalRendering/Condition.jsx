import React from 'react'

function UserGreeting (props) {
    return <h1>{props.name && `${props.name},`} Welcome {props.count ? `It's ${props.count} times` : null} </h1>
}

function GuestGreeting(props) {
    return <h1> Please Sign Up</h1>;
}

function Greeting(props) {
    // if(props.isLoggedIn){
    //  return  <UserGreeting name="jaemin" count={0} />
    // }

    // return <GuestGreeting />

    return props.isLoggedIn ? <UserGreeting name="jaemin"  count={0} /> : <GuestGreeting />
}

function Condition() {
    const isLoggedIn = true;
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  )
}

export default Condition
