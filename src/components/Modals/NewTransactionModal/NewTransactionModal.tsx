import * as Dialog from '@radix-ui/react-dialog'

import { NewTransactionForm } from './components/NewTransactionForm'

import { CloseButton, Content, Overlay, Title } from './NewTransactionModal.styles'

export const NewTransactionModal = () => {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton />

        <Title>Nova transação</Title>

        <NewTransactionForm />
      </Content>
    </Dialog.Portal>
  )
}
