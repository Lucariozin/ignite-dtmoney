import * as Dialog from '@radix-ui/react-dialog'

import { NewTransactionModal } from '@components/Modals/NewTransactionModal'

import { Summary } from './components/Summary'

import {
  Container,
  Wrapper,
  NewTransactionContainer,
  Logo,
  LogoImg,
  LogoText,
  NewTransactionButton,
  SummaryContainer,
} from './Header.styles'

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <NewTransactionContainer>
          <Logo>
            <LogoImg src="/img/ignite-dtmoney-logo.svg" alt="" />
            <LogoText>DT Money</LogoText>
          </Logo>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>Nova transação</NewTransactionButton>
            </Dialog.Trigger>

            <NewTransactionModal />
          </Dialog.Root>
        </NewTransactionContainer>

        <SummaryContainer>
          <Summary />
        </SummaryContainer>
      </Wrapper>
    </Container>
  )
}
