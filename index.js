const Box = props => {
  const {text, bgColor} = props
  return <div className={`box ${bgColor}`}>{text}</div>
}

const element = (
  <div className='bg-container'>
    <h1 className='heading'>Boxes</h1>
    <div className='box-container'>
      <Box text='Small' bgColor='btn1' />
      <Box text='Medium' bgColor='btn2' />
      <Box text='Large' bgColor='btn3' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
