import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Container, SectionContainer, Desktop, Mobile, Flex } from 'components/containers'
import { localize, Localize } from 'components/localization'
import { Header, QueryImage } from 'components/elements'
import device from 'themes/device'

const query = graphql`
    query {
        payment_agent: file(relativePath: { eq: "payment-agent.png" }) {
            ...fadeIn
        }
    }
`
const WrapContainer = styled(Container)`
    flex-wrap: wrap;

    @media (max-width: 1310px) {
        ${Flex} {
            margin-right: 0;
            margin-bottom: 2.4rem;
        }
    }
`

const Wrapper = styled.div`
    width: 100%;
    max-width: 48.6rem;
`

const TapIntoContainer = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding: 40px 0 36px;
    }
`

const TapInto = () => {
    const data = useStaticQuery(query)
    return (
        <TapIntoContainer>
            <WrapContainer justify="center">
                <Flex direction="column" mr="2.4rem" max_width="48.6rem">
                    <Header as="h3" type="heading-2" mb="1.6rem">
                        <Localize translate_text="_t_Tap into an established and growing market_t_" />
                    </Header>
                    <Header as="h4" type="subtitle-2" weight="normal">
                        <Localize translate_text="_t_Reach hundreds of traders on our platform looking for ways to fund their accounts through local bank wires and e-payment methods._t_" />
                    </Header>
                </Flex>
                <Wrapper>
                    <Desktop>
                        <QueryImage
                            data={data['payment_agent']}
                            alt={localize('_t_Girl talking to a group of people_t_')}
                            height="28rem"
                        />
                    </Desktop>
                    <Mobile>
                        <QueryImage
                            data={data['payment_agent']}
                            alt={localize('_t_Girl talking to a group of people_t_')}
                            height="220px"
                        />
                    </Mobile>
                </Wrapper>
            </WrapContainer>
        </TapIntoContainer>
    )
}

export default TapInto
