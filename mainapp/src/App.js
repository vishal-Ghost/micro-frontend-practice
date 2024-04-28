import React from 'react'
const Button = React.lazy(()=> import("MicroFrontend/Button"))
const TextInput = React.lazy(()=> import("MicroFrontend2/TextInput"))

const App = () => {
  return (
    <div>App
        <Button buttonName={'click me'} />
        <TextInput formName={'Details Form'} />
    </div>
  )
}

export default App