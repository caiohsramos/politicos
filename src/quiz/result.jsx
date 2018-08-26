import React from 'react'

import Card from '../politicos/card'

export default props => {
    const renderBest = () => {
        var max = -1
        var max_key = null
        for (var key in props.grades) {
            if(max < props.grades[key]) {
                max = props.grades[key]
                max_key = key
            }
        }
        return <Card name={`${max_key}`} />
    }
    return (
        <div>
        <h1>Resultado do quiz</h1>
        {renderBest()}
        </div>
    )
    
}