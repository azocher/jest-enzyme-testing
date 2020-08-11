import React, { useState } from 'react'

export default function Counter() {
    let [number, setNumber] = useState(0)

        return (
            <div>
                <h1>
                    Counter
                </h1>
                <h3 className="number">
                    {number}
                </h3>
                <button className="plus">+</button>
                <button className="minus">-</button>
                <h4>new change</h4>
            </div>
        )
}
