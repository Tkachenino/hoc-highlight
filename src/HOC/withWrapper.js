const withWrapper = (WrapperNew, WrapperPopular, Component) => {
  const ComponentWithWrap = (props) => {
    if (props.views < 100) {
      return (
        <WrapperNew>
          <Component {...props}/>
        </WrapperNew>
      )
    } else if (props.views >= 1000) {
      return (
        <WrapperPopular>
          <Component {...props}/>
        </WrapperPopular>
      )
    } else {
      return <Component {...props}/>
    }
  }
    
  return ComponentWithWrap;
}

export default withWrapper;