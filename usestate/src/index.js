// import React from 'react';
import ReactDOM from 'react-dom';
// import React, { useState } from 'react';
// import React, { useRef } from 'react';
// import React, { useReducer }  from 'react';
// import React, { useReducer, useRef } from 'react';
// import React, { useState, useEffect } from 'react';
// import React, { useEffect, useState, useRef } from 'react';
import React, { useEffect, useState } from 'react';


// class OneTimeButton extends React.Component {
//     state = {
// 	clicked: false
//     }

//     handleClick = () => {
// 	this.props.onClick();
// 	this.setState({ clicked: true });
//     }

//     render() {
// 	return (
// 	    <button
// 	      onClick={this.handleClick}
// 	      disabled={this.state.clicked}
// 	    >
// 	      You Can Only Click Me Once
// 	    </button>
// 	);
//     }
// }

// ReactDOM.render(
// 	<OneTimeButton onClick={() => alert("hi")}/>,
//     document.querySelector('#root')
// );

// function StepTracker() {
//     const [steps, setSteps] = useState(0);

//     function increment() {
// 	setSteps(steps => steps + 1);
//     }

//     return (
// 	    <div>
// 	    Today youve taken {steps} steps!
// 	    <br />
// 	    <button onClick={increment}>I took another step</button>
// 	    </div>
//     );
// }

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

// function RandomList() {
//     const [items, setItems] = useState([]);

//     const addItem = () => {
// 	setItems([
// 	    ...items,
// 	    {
// 		id: items.length,
// 		value: Math.random() * 100
// 	    }
// 	]);
//     };
//     return (
// 	    <>
// 	    <button onClick={addItem}> Add a number</button>
// 	    <ul>
// 	    {items.map(item => (
// <li key={item.id}>{item.value}</li>
// 	    ))}
// 	</ul>
// 	    </>
//     );
// }

// ReactDOM.render(
// 	<RandomList />,
//     document.querySelector('#root')
// );

// const MultiCounter = () => {
//     const [counts, setCounts] = useState({
// 	countA: 0,
// 	countB: 0
//     });

//     const incA = () => (
// 	setCounts(counts => ({
// 	    ...counts,
// 	    countA: counts.countA + 1
// 	}))
//     );

//     const incB = () => (
// 	setCounts(counts => ({
// 	    ...counts,
// 	    countB: counts.countB + 1
// 	}))
//     );

//     const badIncA = () => (
// 	setCounts({
// 	    countA: counts.countA + 1
// 	})
//     );

//     return (
// 	    <>
// 	    <div>A: {counts.countA}</div>
// 	    <div>B: {counts.countB}</div>
// 	    <button onClick={incA}>
// 	    Increment A
// 	</button>
// 	    <button onClick={incB}>
// 	    Increment B
// 	</button>
// 	    <button onClick={badIncA}>
// 	    Increment A Badly
// 	</button>
// 	    </>
//     );
// }

// ReactDOM.render(
// 	<AudioControl />,
//     document.querySelector('#root')
// );

// -------------

// function Light() {
//     const [toggles, setToggles] = useState(0);

//     function toggle() {
// 	setToggles(toggles => !toggles);
//     }
//     return (
// 	    <>
// 	    <button onClick={toggle}>ON/OFF</button>
// 	    <br/>
// 	    部屋は{toggles ? '明るい' : '暗い'}
// 	    </>
//     );
// }

// ------------

// function AudioControl() {
//     const [volume, setVolume] = useState(50);
//     const [treble, setTreble] = useState(50);

//     function incrementVolume() {
// 	setVolume(volume => volume + 1);
//     }
//     function decrementVolume() {
// 	setVolume(volume => volume - 1);
//     }
//     function incrementTreble() {
// 	setTreble(treble => treble + 1);
//     }
//     function decrementTreble() {
// 	setTreble(treble => treble - 1);
//     }

//     return (
// 	    <>
// 	    <button onClick={decrementVolume}>-</button>
// 	    volume:{volume}
// 	    <button onClick={incrementVolume}>+</button>
// 	    <br/>
// 	    <button onClick={decrementTreble}>-</button>
// 	    treble:{treble}
// 	    <button onClick={incrementTreble}>+</button>
// 	    </>
//     );
// }

// class GoodExample extends Component {
//     render() {
// 	return (
// 		<div>The data: {this.props.data}</div>
// 	)
//     }
// }

// <div>
// {this.state.isModalOpen &&
//  <Modal onClose={this.handleClose}/>}
// </div>

// class Badge extends Component {
//     componentDidUpdate(oldProps) {
// 	if(this.props.counter !== oldProps.counter) {
// 	    this.setState({ animating: true }, () => {
// 		setTimeout(() => {
// 		    this.setState({ animating: false });
// 		}, 200);
// 	    });
// 	}
//     }

//     render() {
// 	const animatingClass =
// 	      this.state.animating ? 'animating' : '';
// 	return (
// 		<div className={`badge ${animatingClass}`}>
// 		{this.props.coutner}
// 	    </div>
// 	);
//     }
// }

// class Layout extends React.Component {
//     state = {
// 	showSidebar: false
//     }
//     toggleSidebar = () => {
// 	this.setState({
// 	    showSidebar: !this.state.showSidebar
// 	});
//     }

//     render() {
// 	const { showSidebar } = this.state;
// 	return (
// 		<div className="layout">
// 		{showSidebar &&
// 		 <Sidebar
// 		 onHide={this.toggleSidebar}>
// 		 some sidebar content
// 		 </Sidebar>}
// 		<Content
// 	    isSidebarVisible={showSidebar}
// 	    onShowSidebar={this.toggleSidebar}>
// 		some content here
// 	    </Content>
// 		</div>
// 	);
//     }
// }

// const Content = ({
//     children,
//     isSidebarVisible,
//     onShowSidebar
// }) => (
// 	<div className="content">
// 	{children}
//     {!isSidebarVisible && (
// 	    <button onClick={onShowSidebar}>
// 	    Show
// 	</button>
//     )}
//     </div>
// );

// const Sidebar = ({
//     onHide,
//     children
// }) => (
// 	<div className="sidebar">
// 	{children}
// 	<button onClick={onHide}>
// 	Hide
//     </button>
// 	</div>
// );

// ReactDOM.render(
// 	<Layout />,
//     document.querySelector('#root')
// );

// --------------------

// const InputExample = () => {
//     const [text, setText] = useState('');

//     const handleChange = event => {
// 	setText(event.target.value);
//     };

//     return (
// 	    <input
// 	type="text"
// 	value={text}
// 	onChange={handleChange}
// 	    />
//     );
// }

// --------------------

// const TrickInput = () => {
//     const [text, setText] = useState(
// 	'try typing something'
//     );

//     const handleChange = event => {
// 	setText('haha nope');
//     };

//     return (
// 	    <input
// 	type="text"
// 	value={text}
// 	onChange={handleChange}
// 	/>
//     );
// }

// const NoNumbersInput = () => {
//     const [text, setText] = useState(
// 	''
//     );

//     const handleChange = event => {
// 	let text = event.target.value;
// 	setText(
// 	    text.replace(/[0-9]/g, '')
// 	);
//     };
//     return (
// 	    <input
// 	type="text"
// 	value={text}
// 	onChange={handleChange}
// 	    />
//     );
// }

// --------------------

// const EasyInput = () => (
// 	<input type="text" />
// );

// --------------------

// const RefInput = () => {
//     const input = useRef();

//     const showValue = () => {
// 	alert(`Input contains: ${input.current.value}`);
//     };

//     return (
// 	    <div>
// 	    <input type="text" ref={input} />
// 	    <button onClick={showValue}>
// 	    Alert the Value!
// 	</button>
// 	    </div>
//     );
// };

// const InputExercise = () => {
//     const [name, setName] = useState('');
//     const [family, setFamily] = useState('');

//     const handleChangeName = event => {
// 	setName(event.target.value);
//     };

//     const handleChangeFamily = event => {
// 	setFamily(event.target.value);
//     };

//     return (
// 	<>
// 	    <input
// 	type="name"
// 	value={name}
// 	onChange={handleChangeName}
// 	    />
// 	    <input
// 	type="family"
// 	value={family}
// 	onChange={handleChangeFamily}
// 	    />
// 	    <div>
// 	    Hello,{name} {family}
// 	</div>
// 	</>
//     );
// }

// setLetter = (event) => {
//     this.setState({
// 	letter: event.target.value
//     });
// }

// render() {
//     const {letter} = this.state;
//     return (
// 	    <form>
// 	    <input
// 	type="radio"
// 	value="a"
// 	checked={letter === 'a'}
// 	onChange={this.setLetter}
// 	    />
// 	    <input
// 	type="radio"
// 	value="b"
// 	checked={letter === 'b'}
// 	onChange={this.setLetter}
// 	    />
// 	    <input
// 	type="radio"
// 	value="c"
// 	checked={letter === 'c'}
// 	onChange={this.setLetter}
// 	    />
// 	    </form>
//     );
// }

// const adder = (total, number) => {
//     return total + number;
// };
// let numbers = [1, 2, 3];
// let sum = numbers.reduce(adder, 0);

// useReducer((state, action) => {
//     return state + action;
// }, 0);

// function Counter() {
//     const [sum, dispatch] = useReducer((state, action) => {
// 	return state + action;
//     }, 0);
// return (
// 	<>
// 	{sum}
// 	<button onClick={() => dispatch(1)}>
// 	Add 1
//     </button>
//     </>
// );
// }

// ----------

// const reducer = (state, action) => {
//     switch (action.type) {
//     case 'add':
// 	return [
// 	    ...state,
// 	    {
// 		id: state.length,
// 		name: action.name
// 	    }
// 	];
//     case 'remove':
// 	return state.filter((_, index) => index !== action.index);
//     case 'clear':
// 	return [];
//     default:
// 	return state;
//     }
// };

// function ShoppingList() {
//     const inputRef = useRef();
//     const [items, dispatch] = useReducer(reducer, []);

//     function handleSubmit(e) {
// 	e.preventDefault();
// 	dispatch({
// 	    type: 'add',
// 	    name: inputRef.current.value
// 	});
// 	inputRef.current.value = '';
//     }
//     return (
// 	<>
// 	  <form onSubmit={handleSubmit}>
// 	    <input ref={inputRef} />
// 	  </form>
// 	  <ul>
// 	    {items.map((item, index) => (
// 		<li key={item.id}>
// 		    {item.id}. {item.name}
// 		    <button
// 		onClick={() => dispatch({ type: 'remove', index })}
// 		    >
// 		    x
// 		</button>
// 		</li>
// 	    ))}
// 	</ul>
// 	    <button
// 	onClick={() => dispatch({ type: 'clear'})}>
// 	    Clear
// 	    </button>
// 	</>
//     );

// }

// --------------------
// できぬ

// let lights = ["off", "low", "medium", "high"];
// const reducer = (state, action) => {
//     switch (action.type) {
//     case 'add':
// 	return {
// 	    count: state + 5,
// 	    level: lights[(state + action) %4]
// 	};
//     default:
// 	return {
// 	    count: state,
// 	    level: lights[(state + action) %4]
// 	}
//     }
// };


// function Light() {
//     const [results, dispatch] = useReducer(reducer, []);
//     return (
// 	    <>
// 	    {results.count}
// 	    {results.level}
// 	    <button onClick={() => dispatch({type: 'add'})}>
// 	    Toggle
// 	</button>
// 	    </>
//     )
// }

// const reducer = (state, action) => {
//     switch (action.type) {
//     case 'add':
// 	return [
// 	    ...state,
// 	    {
// 		id: state.length,
// 		name: action.name
// 	    }
// 	];
//     case 'remove':
// 	return state.filter((_, index) => index !== action.index);
//     case 'clear':
// 	return [];
//     default:
// 	return state;
//     }
// };

// --------------------
// const LogEffect = () => {
//     const [text, setText] = useState('');

//     useEffect(() => {
// 	console.log('latest value:', text);
//     });

//     return (
// 	    <input
// 	value={text}
// 	onChange={e => setText(e.target.value)}
// 	/>
//     );
// };

// --------------------

// const LogEffect = () => {
//     const [text, setText] = useState('');

//     useEffect(() => {
// 	if(text === '1234') {
// 	    setText("goal");
// }
//     }, [text]);

//     return (
// 	    <>
// 	    {text}<br/>
// 	    <input
// 	value={text}
// 	onChange={e => setText(e.target.value)}
// 	    />
// 	    </>
//     );
// };

// --------------------

// function App() {
//     const inputRef = useRef();

//     const [value, setValue] = useState("");

//     useEffect(
// 	() => {
// 	    // console.log("render");
// 	    // inputRef.current.focus();
// 	    console.log('mounted');
// 	    return () => console.log('unmounting...');
// 	},
// 	// [inputRef]
// 	[]
//     );

//     return (
// 	    <input
// 	ref={inputRef}
// 	value={value}
// 	onChange={e => setValue(e.target.value)}
// 	/>
//     );
// }

// --------------------

// function Reddit() {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
// 	fetch("https://www.reddit.com/r/reactjs.json")
// 	    .then(res => res.json())
// 	.then(json =>
// 	      setPosts(json.data.children.map(c => c.data))
// 	     );
//     },[setPosts]);

//     return (
// 	    <ul>
// 	    {posts.map(post => (
// 		<li key={post.id}>{post.title}</li>
// 	    ))}
// 	</ul>
//     );
// }

// --------------------

// function Reddit({ subreddit }) {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
// 	fetch(
// 	    `https://www.reddit.com/r/${subreddit}.json`
// 	)
// 	    .then(res => res.json())
// 	.then(json =>
// 	      setPosts(json.data.children.map(c => c.data))
// 	     )
//     }, [subreddit, setPosts]);

//     return (
// 	    <ul>
// 	    {posts.map(post => (
// 		<li key={post.id}>{post.title}</li>
// 	    ))}
// 	</ul>
//     );
// }

// function App() {
//     const [inputValue, setValue] = useState("reactjs");
//     const [subreddit, setSubreddit] = useState(inputValue);

// const handleSubmit = e => {
//     e.preventDefault();
//     setSubreddit(inputValue);
// };

//     return (
// 	    <>
// 	    <form onSubmit={handleSubmit}>
// 	    <input
// 	value={inputValue}
// 	onChange={e => setValue(e.target.value)}
// 	    />
// 	    </form>
// 	    <Reddit subreddit={subreddit} />
// 	    </>
//     );
// }

// --------------------

function App() {
    const [inputValue, setValue] = useState("reactjs");

    return (
	    <>
	    <form>
	    <input
	value={inputValue}
	onChange={e => setValue(e.target.value)}
	    />
 	    </form>
	    {document.title = inputValue}
	    <title>
	    aa
	    </title>
	    </>
    );
}

// --------------------



// --------------------

ReactDOM.render(
	<App />,

    document.querySelector('#root')
);
