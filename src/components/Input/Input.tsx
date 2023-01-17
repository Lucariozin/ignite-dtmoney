import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react'
import { Container } from './Input.styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError: boolean
}

// eslint-disable-next-line
export const Input = forwardRef(
  ({ isError, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return <Container isError={isError} {...props} ref={ref} />
})
