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

          <NewTransactionButton>Nova transação</NewTransactionButton>
        </NewTransactionContainer>

        <SummaryContainer>
          <Summary />
        </SummaryContainer>
      </Wrapper>
    </Container>
  )
}
