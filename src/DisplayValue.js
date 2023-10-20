import { memo } from 'react';

export function DisplayValue(props) {
	return (
		<div>
			<p>
				{props.title}: {JSON.stringify(props.value, null, 2)}
			</p>
		</div>
	);
}

export const DisplayValueMemo = memo(DisplayValue);
