import { memo, useState } from 'react';
import { DisplayValue, DisplayValueMemo } from './DisplayValue';

export function CountCard(props) {
	let Display = DisplayValue;
	if (props.memo) {
		Display = DisplayValueMemo;
	}

	const [count, setCount] = useState(0);
	const onClick = () => {
		setCount(count + 1);
	};

	return (
		<div className="card" style={{ width: '18rem' }}>
			<div className="card-body">
				<h4 className="card-title">{props.title}</h4>
				{props.children}
				<Display value={count} />
				<button className="btn btn-secondary" onClick={onClick}>
					increment
				</button>
			</div>
		</div>
	);
}

export const CountCardMemo = memo(CountCard);
