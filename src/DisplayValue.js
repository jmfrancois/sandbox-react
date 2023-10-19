import { memo } from 'react';

export function DisplayValue(props) {
	return (
		<div>
			<p>
				{typeof props.value} {JSON.stringify(props.value, null, 2)}
			</p>
		</div>
	);
}

export const DisplayValueMemo = memo(DisplayValue);
