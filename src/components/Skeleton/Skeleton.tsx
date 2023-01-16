import { CSSProperties } from 'react'
import { Container } from './Skeleton.styles'

export const Skeleton = (props: CSSProperties) => {
  return <Container style={{ ...props }} />
}
