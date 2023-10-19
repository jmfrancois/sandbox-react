import './App.css';
import { DisplayValue, DisplayValueMemo } from './DisplayValue';
import { CountCard, CountCardMemo } from './CountCard';
import { useTrigger } from './useTrigger';
import { useState } from 'react';

function App() {
	const trigger = useTrigger();
	const [data, setData] = useState({ foo: 'bar' });
	function onChangeData(e) {
		try {
			setData(JSON.parse(e.target.value));
		} catch (e) {}
	}

	return (
		<main>
			<div className="container px-4">
				<h2 className="pb-2 border-bottom">React Performance sandbox</h2>
				<div className="d-flex">
					{/*  Pure will always be re-rendered */}
					<CountCard title="Pure counter">
						<DisplayValue value={trigger.state} />
						<DisplayValue value={data} />
					</CountCard>
					<CountCardMemo title="Memo counter" memo>
						<DisplayValueMemo value={trigger.state} />
						<DisplayValueMemo value={data} />
					</CountCardMemo>
				</div>
				<div className="mb-3">
					<button className="btn btn-primary" onClick={trigger.onClick}>
						Trigger re-render from App
					</button>
				</div>
				<div className="mb-3">
					<label class="form-label">complex data</label>
					<textarea
						className="form-control"
						value={JSON.stringify(data, null, 2)}
						rows="10"
						onChange={onChangeData}
					></textarea>
				</div>
			</div>
		</main>
	);
}

export default App;
