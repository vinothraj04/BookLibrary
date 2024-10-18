import React, { useState } from 'react'

function Theme() {

    const[theme, setTheme]=useState('light')//theme='light'

    function handleThemeChange()
    {
        setTheme(theme=='light'?'dark':'light')//theme=='dark'
    }

  return (
    <div style={{backgroundColor:theme=='light'?'#fcfafa':'#000000'}}>
        <button onClick={handleThemeChange}>Toggle Theme</button>
        <div>
        Mindtree Limited was an Indian multinational information technology services and consulting company, headquartered in Bangalore
        </div>
    </div>
  )
}

export default Theme