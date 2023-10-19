import {memo} from 'react'

function PureSecond(props) {
    console.log('render', props.name || 'Second')
    return (
        <div>
            <h2>{props.name || 'Second'} ({props.count})</h2>
            {props.children}
        </div>
    )
}

export const Second = PureSecond
Second.Memo = memo(PureSecond)