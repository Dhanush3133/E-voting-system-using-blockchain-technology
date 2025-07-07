import { globalActions } from '@/store/globalSlices'
import { RootState } from '@/utils/types'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Banner = () => {
  const dispatch = useDispatch()
  const { setCreateModal } = globalActions
  const { wallet } = useSelector((states: RootState) => states.globalStates)

  const onPressCreate = () => {
    if (wallet === '') return toast.warning('Connect wallet first!')
    dispatch(setCreateModal('scale-100'))
  }

  return (
    <main className="mx-auto text-center space-y-8">
      <h1 className="text-[45px] font-[600px] text-center leading-none text-black">Vote Without Rigging</h1>
      <p className="text-[16px] font-[500px] text-center text-black">
        WHOM TO VOTE?
      </p>

      <button
        className="text-white h-[45px] w-[148px] rounded-full transition-all duration-300
        border border-gray-400 bg-black hover:bg-opacity-20 hover:text-black"
        onClick={onPressCreate}
      >
        Create poll
      </button>
    </main>
  )
}

export default Banner
