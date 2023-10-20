import './App.css';
import { DisplayValue, DisplayValueMemo } from './DisplayValue';
import { CountCard, CountCardMemo } from './CountCard';
import { useTrigger } from './useTrigger';
import { useState } from 'react';

function App() {
	const trigger = useTrigger();
	const [data, setData] = useState({ foo: 'bar' });
	const [onlyLeft, setOnlyLeft] = useState(Math.random());
	const [onlyRight, setOnlyRight] = useState(Math.random());
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
					<CountCard title={`Pure counter`} value={onlyLeft}>
						<DisplayValue title="global" value={trigger.state} />
						<DisplayValue title="object" value={data} />
					</CountCard>
					<CountCardMemo title={`Memo counter memo `} value={onlyRight} memo>
						<DisplayValueMemo title="global" value={trigger.state} />
						{/* <DisplayValueMemo title="spreaded" value={{ ...data }} /> */}
						<DisplayValueMemo title="object" value={data} />
					</CountCardMemo>
				</div>
				<div className="mb-3">
					<h2>Trigger change from App</h2>
					<div className="btn-group">
						<button
							className="btn btn-primary"
							onClick={() => trigger.onClick()}
						>
							update string
						</button>
						<button
							className="btn btn-primary"
							onClick={() => setOnlyLeft(Math.random())}
						>
							update left number
						</button>
						<button
							className="btn btn-primary"
							onClick={() => setOnlyRight(Math.random())}
						>
							update right number
						</button>
					</div>
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
