import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import * as S from './styles'
import Image from 'next/image'
import { useRouter } from 'next/router'

export type ImageProps = {
  url: string
  width: number
  height: number
}

export interface PlacesTemplateProps {
  place: {
    slug: string
    name: string
    description: {
      html: string
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  const router = useRouter()

  if (router?.isFallback) {
    return <p>Loading...</p>
  }

  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size="32" aria-label="Go back to map" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>
          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description.html }}
          />

          <S.Gallery>
            {place.gallery.map((image, i) => {
              return (
                <Image
                  key={i}
                  src={image.url}
                  alt={place.name}
                  width={1000}
                  height={600}
                  quality={75}
                />
              )
            })}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
