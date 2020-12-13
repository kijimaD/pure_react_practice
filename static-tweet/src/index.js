import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet() {
    return (
	  <div className="tweet">
	    <Avatar/>
	    <div className="content">
	    <Author/><Time/>
	    <Message/>
	    <div className="buttons">
	    <ReplyButton/>
	    <RetweetButton/>
	    <LikeButton/>
	    <MoreOptionsButton/>
	    </div>
	    </div>
	    </div>
    );
}

function Avatar() {
    return (
	    <img
	src="https://www.gravatar.com/avatar/nothing"
	className="avatar"
	alt="avatar" />
    );
}

function Message() {
    return (
	    <div className="message">
	    This is less than 140 characters.
	    </div>
    );
}

function Author() {
    return (
	    <span className="author">
	    <span className="name">Your Name</span>
	    <span className="handle">@yourhandle</span>
	    </span>
    );
}

const Time = () => (
    <span className="time">3h ago</span>
);

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
);

const RetweetButton = () => (
    <i className="fa fa-retweet retweet-button"/>
);

const LikeButton = () => (
    <i className="fa fa-heart like-button"/>
);

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);

// function Dave() {
//     const firstName = "Dave";
//     const lastName = "Ceddia";

//     return React.createElement(, {
// 	age: 33,
// 	name: firstName + ' ' + lastName,
// 	className: 'person'
//     }, null);
// }

// function handleAction(event) {
//     console.log('Child did:', event);
// }

// function Parent() {
//     return (
// 	    <Child onAction={handleAction}/>
//     );
// }

// function Child({ onAction }) {
//     return (
// 	    <button onClick={onAction}/>
//     );
// }

// function greet() {
//     return 'Hi Dave';
// }
// function greet(name) {
//     return 'Hi Dave' + name;
// }

ReactDOM.render(<Tweet/>,
		document.querySelector('#root'));
