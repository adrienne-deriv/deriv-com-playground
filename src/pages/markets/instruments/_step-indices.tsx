import React from 'react'
import Symbol from '../components/helper/_symbol'
import icons from 'components/elements/symbols'
import { Localize } from 'components/localization'

const StepIndices = () => {
    const [lazyIcon, setLazyIcon] = React.useState('')

    const loadIcon = async () => {
        const icon = await icons['STEPINDICESNEW']

        setLazyIcon(icon.default)
    }

    React.useEffect(() => {
        loadIcon()
    }, [])

    return (
        <>
            <Symbol src={lazyIcon} text={<Localize translate_text="Step Index" />} />
        </>
    )
}

export default StepIndices
