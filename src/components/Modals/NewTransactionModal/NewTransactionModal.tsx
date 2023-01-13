import * as Dialog from '@radix-ui/react-dialog'

import { NewTransactionForm } from './components/NewTransactionForm'

import { CloseButton, Content, Overlay, Title } from './NewTransactionModal.styles'

interface NewTransactionModalProps {
  closeModal: () => void
}

export const NewTransactionModal = ({ closeModal }: NewTransactionModalProps) => {
  return (
    <Dialog.Portal>
      <Overlay onClick={closeModal} />

      <Content onEscapeKeyDown={closeModal}>
        <CloseButton onClick={closeModal} />

        <Title>Nova transação</Title>

        <NewTransactionForm closeModal={closeModal} />
      </Content>
    </Dialog.Portal>
  )
}
