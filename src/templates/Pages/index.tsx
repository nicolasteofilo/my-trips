import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'

import { CloseOutline } from '@styled-icons/evaicons-outline'

const PageTemplate = () => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size="32" />
      </LinkWrapper>

      <S.Heading>About</S.Heading>
      <S.Body>
        <p>My trips</p>
      </S.Body>
    </S.Content>
  )
}

export { PageTemplate }
