import React from 'react'
import styled from 'styled-components'
import type { ImageDataLike } from 'gatsby-plugin-image'
import { BackgroundImage, Header } from 'components/elements'
import { Container } from 'components/containers'
import device from 'themes/device'
import { Localize } from 'components/localization'

interface HeroComponentProps {
    background_data: ImageDataLike
    background_dark: string
}

const StyledContainer = styled(Container)`
    height: 100%;
    padding: 160px 222px;

    @media ${device.tabletL} {
        padding: 120px 16px;
        width: 100%;
    }
`

const Subheadline = styled(Header)`
    font-weight: normal;
    margin-top: 16px;
`

const HeroComponent = ({ background_data, background_dark }: HeroComponentProps) => {
    return (
        <BackgroundImage
            data={background_data}
            alt="deriv security"
            style={{
                backgroundSize: `cover`,
                maxWidth: '100%',
            }}
            dark={background_dark}
        >
            <StyledContainer direction="column">
                <Header as="h1" color="white" align="center" type="heading-1">
                    <Localize translate_text="_t_Bug bounty program_t_" />
                </Header>
                <Subheadline as="p" color="white" align="center" type="subtitle-1">
                    <Localize translate_text="_t_Security is a collaboration. Report bugs and be rewarded._t_" />
                </Subheadline>
            </StyledContainer>
        </BackgroundImage>
    )
}

export default HeroComponent
