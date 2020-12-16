// import React from 'react';
import ReactDOM from 'react-dom';
import React, { useState } from 'react';

class OneTimeButton extends React.Component {
    state = {
	clicked: false
    }

    handleClick = () => {
	this.props.onClick();
	this.setState({ clicked: true });
    }

    render() {
	return (
		<button
	    onClick={this.handleClick}
	    disabled={this.state.clicked}
		>
		You Can Only Click Me Once
	    </button>
	);
    }
}

// ReactDOM.render(
// 	<OneTimeButton onClick={() => alert("hi")}/>,
//     document.querySelector('#root')
// );

function StepTracker() {
    const [steps, setSteps] = useState(0);

    function increment() {
	setSteps(steps => steps + 1);
    }

    return (
	    <div>
	    Today youve taken {steps} steps!
	    <br />
	    <button onClick={increment}>I took another step</button>
	    </div>
    );
}

// ReactDOM.render(
// 	<StepTracker />,
//     document.querySelector('#root')
// );

// function RandomList() {
//     const [items, setItems] = useState([]);

//     const addItem = () => {
// 	setItems([
// 	    ...items,
// 	    {
// 		id:items.length,
// 		value: Math.random() * 100
// 	    }
// 	]);
//     };

//     return (
// 	    <>
// 	    <button onClick={addItem}>Add a number</button>
// 	    <ul>
// 	    {items.map(item => (
// 		<li key={item.id}>{item.value}</li>
// 	    ))}
// 	</ul>
// 	    </>
//     );
// }

function RandomList() {
    const [items, setItems] = useState([]);

    const addItem = () => {
	setItems([
	    ...items,
	    {
		id: items.length,
		value: Math.random() * 100
	    }
	]);
    };
    return (
	    <>
	    <button onClick={addItem}> Add a number</button>
	    <ul>
	    {items.map(item => (
<li key={item.id}>{item.value}</li>
	    ))}
	</ul>
	    </>
    );
}

// ReactDOM.render(
// 	<RandomList />,
//     document.querySelector('#root')
// );

const MultiCounter = () => {
    const [counts, setCounts] = useState({
	countA: 0,
	countB: 0
    });

    const incA = () => (
	setCounts(counts => ({
	    ...counts,
	    countA: counts.countA + 1
	}))
    );

    const incB = () => (
	setCounts(counts => ({
	    ...counts,
	    countB: counts.countB + 1
	}))
    );

    const badIncA = () => (
	setCounts({
	    countA: counts.countA + 1
	})
    );

    return (
	    <>
	    <div>A: {counts.countA}</div>
	    <div>B: {counts.countB}</div>
	    <button onClick={incA}>
	    Increment A
	</button>
	    <button onClick={incB}>
	    Increment B
	</button>
	    <button onClick={badIncA}>
	    Increment A Badly
	</button>
	    </>
    );
}

ReactDOM.render(
	<AudioControl />,
    document.querySelector('#root')
);

// -------------

function Light() {
    const [toggles, setToggles] = useState(0);

    function toggle() {
	setToggles(toggles => !toggles);
    }
    return (
	    <>
	    <button onClick={toggle}>ON/OFF</button>
	    <br/>
	    部屋は{toggles ? '明るい' : '暗い'}
	    </>
    );
}
// ------------

function AudioControl() {
    const [volume, setVolume] = useState(50);
    const [treble, setTreble] = useState(50);

    function incrementVolume() {
	setVolume(volume => volume + 1);
    }
    function decrementVolume() {
	setVolume(volume => volume - 1);
    }
    function incrementTreble() {
	setTreble(treble => treble + 1);
    }
    function decrementTreble() {
	setTreble(treble => treble - 1);
    }

    return (
	    <>
	    <button onClick={decrementVolume}>-</button>
	    volume:{volume}
	    <button onClick={incrementVolume}>+</button>
	    <br/>
	    <button onClick={decrementTreble}>-</button>
	    treble:{treble}
	    <button onClick={incrementTreble}>+</button>
	    </>
    );

}
