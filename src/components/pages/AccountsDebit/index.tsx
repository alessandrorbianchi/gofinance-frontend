import * as S from './styles'
import ListAccounts from '@/components/ListAccounts'
import { useState } from 'react'

const AccountsDebit = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const getValueOpen = (value: boolean) => {
    setModalIsOpen(value)
  }
  return (
    <>
      <S.Wrapper>
        <ListAccounts openModal={getValueOpen} />
      </S.Wrapper>
    </>
  )
}

export default AccountsDebit
