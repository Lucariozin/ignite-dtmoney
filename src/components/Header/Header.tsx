import { useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import { NewTransactionModal } from '@components/Modals/NewTransactionModal'
import { Summary } from '@components/Summary'

import {
  Container,
  Wrapper,
  NewTransactionContainer,
  Logo,
  NewTransactionButton,
  SummaryContainer,
} from './Header.styles'

export const Header = () => {
  const [newTransactionModalIsOpen, setNewTransactionModalIsOpen] = useState(false)

  const openNewTransactionModal = () => setNewTransactionModalIsOpen(true)
  const closeNewTransactionModal = () => setNewTransactionModalIsOpen(false)

  return (
    <Container>
      <Wrapper>
        <NewTransactionContainer>
          <Logo src="/img/ignite-dtmoney-logo.svg" alt="" width={173} height={50} />

          <Dialog.Root open={newTransactionModalIsOpen}>
            <Dialog.Trigger asChild>
              <NewTransactionButton onClick={openNewTransactionModal}>Nova transação</NewTransactionButton>
            </Dialog.Trigger>

            <NewTransactionModal closeModal={closeNewTransactionModal} />
          </Dialog.Root>
        </NewTransactionContainer>

        <SummaryContainer>
          <Summary />
        </SummaryContainer>
      </Wrapper>
    </Container>
  )
}
