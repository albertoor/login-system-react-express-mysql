import { useState } from 'react'

const useShowPassword = (initialState = false) => {
  const [isShowPasswordActive, setIsShowPasswordActive] = useState(initialState)

  // onchange
  const onChangeIsShowPasswordActive = () => {
    setIsShowPasswordActive(!isShowPasswordActive)
  }

  return {
    isShowPasswordActive,
    onChangeIsShowPasswordActive
  }
}

export default useShowPassword