import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';
import PropTypes from 'prop-types';

function Tweet({ tweet }) {
    return (
	  <div className="tweet">
	    <Avatar hash={tweet.gravatar}/>
	    <div className="content">
	    <Author author={tweet.author}/>
	    <Time time={tweet.timestamp}/>
	    <Message text={tweet.message}/>
	    <div className="buttons">
	    <ReplyButton/>
	    <RetweetButton count={tweet.retweets}/>
	    <LikeButton count={tweet.likes}/>
	    <MoreOptionsButton/>
	    </div>
	    </div>
	    </div>
    );
}

function TypeCheck() {
    return (
	<div>
    <Comment author='somebody' message='a likable message' likes={1}/>
    <Comment author='mr_unpopular' message='unlikable message'/>
    <Comment author='mr_unpopular' message='another message' likes={0}/>
    <Comment author='error_missing_message'/>
	    <Comment message='mystery author'/>
	    </div>
    );
}

function Avatar({ hash }) {
    const url = `https://www.gravatar.com/avatar/${hash}`;
    return (
	    <img
	src={url}
	className="avatar"
	alt="avatar" />
    );
}

Avatar.propTypes = {
    hash: PropTypes.string
}

function Message({ text }) {
    return (
	    <div className="message">
	    {text}
	    </div>
    );
}

function Author({ author }) {
    const { name, handle } = author;

    return (
	    <span className="author">
	    <span className="name">{name}</span>
	    <span className="handle">@{handle}</span>
	    </span>
    );
}

Author.propTypes = {
    author: PropTypes.shape({
	name: PropTypes.string.isRequired,
	handle: PropTypes.string.isRequired
    }).isRequired
};

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
	    <span className="time">
	    {timeString}
	</span>
    );
};

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
);

const RetweetButton = ({ count }) => (
    <span className="retweet-button">
	<i className="fa fa-retweet"/>
	{count > 0 &&
	 <span className="retweet-count">
	 {count}
         </span>}
    </span>
);

const LikeButton = ({ count }) => (
    <span className="like-button">
	<i className="fa fa-heart"/>
	{count > 0 &&
	 <span className="like-count">
	 {count}
	 </span>}
    </span>
);

LikeButton.propTypes = {
    count: PropTypes.number
}

RetweetButton.propTypes = {
    count: PropTypes.number
}

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);

function getRetweetCount(count) {
    if(count > 0) {
	return (
		<span className="retweet-count">
		{count}
	    </span>
	);
    } else {
	return null;
    }
}

function Count({ count }) {
    if(count > 0) {
	return (
		<span className="retweet-count">
		{count}
	    </span>
	);
    } else {
	return null;
    }
}

function Comment({ author, message, likes}) {
    return (
	    <div>
	    <div className='author'>{author}</div>
	    <div className='message'>{message}</div>
	    <div className='likes'>
	    {likes > 0 ? likes : 'No'} likes
	</div>
	    </div>
    );
}

Comment.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    likes: PropTypes.number
}

function customValidator(props, propName, componentName) {
    if (props[propName].length !== 3) {
	return new Error(
	    'Invalid prop `' + propName + '` supplied to' +
		' `' + componentName + '`. Length is not 3.'
	);
    }
}

const CustomTest = ({ myCustomProp }) => (
    <span>{myCustomProp}</span>
);

CustomTest.propTypes = {
    myCustomProp: customValidator
}

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

function AddressLabel({ label }) {
    return (
	    <div className="label">
	    <div className="from">
	    <FullName fullname={label.from_fullname}/>
	    <Address1 address1={label.from_address1}/>
	    <Address2 address2={label.from_address2}/>
	    </div>
	    <div className="to">
	    <FullName fullname={label.to_fullname}/>
	    <Address1 address1={label.to_address1}/>
	    <Address2 address2={label.to_address2}/>
	    <IconButton children={"Do The Thing"}></IconButton>
	    </div>
	    </div>
    );
}

function FullName({ fullname }) {
    return(
	    <div className="fullname">
	    {fullname}
	    </div>
    );
}

function Address1({ address1 }) {
    return (
	    <div className="address1">
	    {address1}
	</div>
    );
}

function Address2({ address2 }) {
    return (
	    <div className="address2">
	    {address2}
	</div>
    );
}

function IconButton({ children }) {
    return (
	    <button>
	    <i class="target-icon"/>
	    {children}
	</button>
    );
}

function Nav({ children }) {
    let items = React.Children.toArray(children);
    for(let i = items.length - 1; i >= 1; i--) {
	items.splice(i, 0,
		     <span key={i} className='separator'>|</span>
		    );
    }
    return (
	<div>{items}</div>
    );
}

const testLabel = {
    from_fullname: "Kijima Daigo",
    from_address1: "Bakuro-cho",
    from_address2: "Tokyo",
    to_fullname: "Itoh Joji",
    to_address1: "",
    to_address2: "Shibushi",
};

const testTweet = {
    message: "Something about cats.",
    gravatar: "4b4c88daa2d4cec56333c7959b08c18d",
    author: {
	handle: "catperson",
	name: "IAMA Cat Person"
    },
    likes: 2,
    retweets: 1,
    timestamp: "2016-07-30 21:24:37"
};

// ReactDOM.render(<Tweet tweet={testTweet}/>,
// 		document.querySelector('#root'));
ReactDOM.render(<AddressLabel label={testLabel}/>,
		document.querySelector('#root'));

// ReactDOM.render(
// 	<CustomTest myCustomProp="aaaaaaaaaaaaa"/>,
// 	document.querySelector('#root')
// );
