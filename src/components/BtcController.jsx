import React from 'react'

import BtcCoinCap from './BtcCoinCap'
import BtcPolo from './BtcPolo'
import BtcKraken from './BtcKraken'

const BtcController = () => {
    return(
        <div>
            <BtcCoinCap />
            <BtcPolo />
            <BtcKraken />
        </div>
    )
}

export default BtcController