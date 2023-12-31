import React from 'react'
import { Localize } from 'components/localization'
import AdvancedCharting from 'images/svg/markets/forex/charting.svg'
import Deposit from 'images/svg/markets/forex/deposit.svg'
import FriendlySupport from 'images/svg/markets/forex/smart.svg'
import Leverage from 'images/svg/markets/forex/spread.svg'
import ResponsiveWebsite from 'images/svg/markets/forex/platforms.svg'

export type ForexContentElement = {
    src: string
    alt: string
    text: React.ReactNode
}

export const simple_step_content_forex = [
    {
        header: <Localize translate_text="Practise" />,
        text: (
            <Localize translate_text="Open a demo account and practise with an unlimited amount of virtual funds." />
        ),
    },
    {
        header: <Localize translate_text="Trade" />,
        text: (
            <Localize translate_text="Open a real account, make a deposit, and start trading forex and other markets." />
        ),
    },
    {
        header: <Localize translate_text="Withdraw" />,
        text: (
            <Localize translate_text="Conveniently withdraw your funds through any of our supported withdrawal methods." />
        ),
    },
]

export const simple_step_derived_fx = [
    {
        header: <Localize translate_text="Practise" />,
        text: (
            <Localize translate_text="Open a demo account and practise with an unlimited amount of virtual funds." />
        ),
    },
    {
        header: <Localize translate_text="Trade" />,
        text: (
            <Localize translate_text="Open a real account, make a deposit, and start trading derived FX and other markets." />
        ),
    },
    {
        header: <Localize translate_text="Withdraw" />,
        text: (
            <Localize translate_text="Conveniently withdraw your funds through any of our supported withdrawal methods." />
        ),
    },
]

export const forex_content: ForexContentElement[] = [
    {
        src: Leverage,
        alt: 'High and low',
        text: <Localize translate_text="_t_High leverage, tight forex spreads_t_" />,
    },
    {
        src: ResponsiveWebsite,
        alt: 'Responsive platforms',
        text: <Localize translate_text="Responsive, easy-to-use online trading platforms" />,
    },
    {
        src: AdvancedCharting,
        alt: 'Charts',
        text: <Localize translate_text="Advanced charting widgets" />,
    },
    {
        src: Deposit,
        alt: 'Deposits and withdrawals method',
        text: <Localize translate_text="Convenient deposit and withdrawal methods" />,
    },
    {
        src: FriendlySupport,
        alt: 'Friendly support team',
        text: <Localize translate_text="Smart and friendly support, 7 days a week" />,
    },
]

export const forex_content_eu: ForexContentElement[] = [
    {
        src: Leverage,
        alt: 'High and low',
        text: <Localize translate_text="Tight spreads" />,
    },
    {
        src: ResponsiveWebsite,
        alt: 'Responsive platforms',
        text: <Localize translate_text="Responsive, easy-to-use platforms" />,
    },
    {
        src: AdvancedCharting,
        alt: 'Charts',
        text: <Localize translate_text="Advanced charting widgets" />,
    },
    {
        src: Deposit,
        alt: 'Deposits and withdrawals method',
        text: <Localize translate_text="Convenient deposit and withdrawal methods" />,
    },
    {
        src: FriendlySupport,
        alt: 'Friendly support team',
        text: <Localize translate_text="Smart and friendly support, 7 days a week" />,
    },
]
