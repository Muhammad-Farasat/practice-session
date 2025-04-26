import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { themeChange } from '../redux/themeSlice'
import { translate } from '../redux/languageSlice'
import { FaEye,FaEyeSlash } from "react-icons/fa";





function LoginForm() {

  const themeMode = useSelector((state) => state.theme.value)
  const translateMode = useSelector((state) => state.language.value)

  const dispatch = useDispatch()

  const [showPassword,setShowPassword] = useState(false)

  return (
    <>
      <section className={`w-full min-h-screen flex items-center justify-center ${themeMode === 'light' ? 'bg-gray-100' : 'bg-[#222] '}`}>

        <div className={`w-[32rem] ${themeMode === 'light' ? 'bg-white text-gray-800' : 'bg-[#2c2c2c] text-amber-50'} shadow-lg rounded-lg p-10 flex flex-col gap-6`}>

          <h2 className={`text-2xl font-semibold text-center`}>
            {
              translateMode === 'en' ? 'Login' : 'لاگ ان'
            }
          </h2>

          <input
            type="email"
            placeholder="Email"
            className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
          />

          <div
            className=' border border-gray-300 rounded-md flex items-center focus:outline-none focus:ring-2 focus:ring-blue-400'>

            <input
              type={ showPassword === true ? "text" : "password"}
              placeholder="Password"
              className='w-full p-3 border-none outline-0 '
            />

            <div onClick={() => setShowPassword(!showPassword)} className='mr-3 cursor-pointer'>

              {
                showPassword === true ? <FaEyeSlash /> : <FaEye />

              }

            </div>

          </div>

          <button className='mt-4 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition duration-300'>
            {
              translateMode === 'en' ? 'Login' : 'لاگ ان'
            }
          </button>

          <button onClick={() => dispatch(themeChange())} className='bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition duration-300'>
            {
              translateMode === 'en' ? 'Change mode' : 'موڈ تبدیل کریں'
            }
          </button>

          <button onClick={() => dispatch(translate())} className='bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition duration-300'>
            {
              translateMode === 'en' ? 'Translate' : 'ترجمہ کریں'
            }
          </button>

        </div>

      </section>
    </>
  )
}

export default LoginForm
