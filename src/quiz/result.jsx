import React from 'react'

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
        return <h2>{max_key}</h2>
    }
    return (
        <div>
        <h1>Resultado do quiz</h1>
        {renderBest()}
        </div>
    )
    
}