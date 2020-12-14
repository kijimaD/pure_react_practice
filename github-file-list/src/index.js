import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';
import PropTypes from 'prop-types';
import Time from './Time';
import axios from 'axios';

const FileList = ({ files }) => (
	<table className="file-list">
	<tbody>
	{files.map(file =>
		   <FileListItem key={file.id} file={file}/>
		  )}
    </tbody>
	</table>
);

FileList.propTypes = {
    files: PropTypes.array
};

const FileListItem = ({ file }) => (
	<tr className="file-list-item">
	<td className="file-icon"><FileIcon file={file}/></td>
	<td className="file-name"><FileName file={file}/></td>
	<td className="commit-message"><CommitMessage commit={file.latestCommit}/></td>
	<td className="time"><Time time={file.updated_at}/></td>
	</tr>
);
FileListItem.propTypes = {
    file: PropTypes.object.isRequired
};

function FileIcon({ file }) {
    let icon = 'fa-file-text-o';
    if(file.type === 'folder') {
	icon = 'fa-folder';
    }

    return (
	    <i className={`fa ${icon}`}/>
    );
}
FileIcon.propTypes = {
    file: PropTypes.object.isRequired
};

function FileName({ file }) {
    return (
	    <>
	    {file.name}
	    </>
    );
}

FileName.propTypes = {
    file: PropTypes.object.isRequired
};

const CommitMessage = ({ commit }) => (
    <>
	{commit.message}
    </>
);
CommitMessage.propTypes = {
    commit: PropTypes.object.isRequired
};

const testFiles = [
    {
	id: 1,
	name: 'src',
	type: 'folder',
	updated_at: "2016-07-11 21:24:00",
	latestCommit: {
	    message: 'Initial commit'
	}
    },
    {
	id: 2,
	name: 'tests',
	type: 'folder',
	updated_at: "2016-07-11 21:24:00",
	latestCommit: {
	    message: 'Initial commit'
	}
    },
    {
    	id: 3,
	name: 'README',
	type: 'file',
	updated_at: "2016-07-11 21:24:00",
	latestCommit: {
	    message: 'Added a readme'
	}
    },
];

function handleAction(event) {
    console.log('Child did:', event);
}

function Parent() {
    return (
	    <Child onAction={handleAction}/>
    );
}

function Child({ onAction }) {
    return (
	    <button onClick={onAction}>
	    Switch
	</button>
    );
}

// class CountingParent extends React.Component {
//     constructor(props) {
// 	super(props);

// 	this.state = {
// 	    actionCount: 0
// 	};

// 	this.handleAction = this.handleAction.bind(this);
//     }

//     handleAction(action) {
// 	console.log('Child says', action);

// 	this.setState({
// 	    actionCount: this.state.actionCount + 1
// 	});
//     }

//     render() {
// 	return (
// 		<div>
// 		<Child onAction={this.handleAction}/>
// 		<p>Clicked {this.state.actionCount} times</p>
// 		</div>
// 	);
//     }
// }

class CountingParent extends React.Component {
    state = {
	actionCount: 0
    };

    handleAction = (action) => {
	console.log('Child says', action);

	this.setState({
	    actionCount: this.state.actionCount + 1
	});
    }

    render() {
	return (
		<div>
		<Child onAction={this.handleAction}/>
		<p>Clicked {this.state.actionCount} times</p>
		</div>
	);
    }
}

const Page = () => (
	<div>
	<CountingParent/>
	<CountingParent/>
	<CountingParent/>
	</div>
);

const Switch = () => (
	<div>
	<CheckLight/>
	<CheckLight/>
	</div>
);

function ParentL() {
    return (
	    <ChildL onAction={handleAction}/>
    );
}

function ChildL({ onAction }) {
    return (
	    <button onClick={onAction}>
	    Switch
	</button>
    );
}

class CheckLight extends React.Component {
    state = {
	kitchen: 'true',
	bathroom: false,
	livingRoom: true,
	bedroom: false
    };

    handleAction = (action) => {
	console.log('Switch', action);

	if (this.state.kitchen == 'true') {
	this.setState({
	    kitchen: 'false'

	});
	} else {
	this.setState({
	    kitchen: 'true'

	});
	}
    }

    render() {
	return (
		<div>
		<Child onAction={this.handleAction}/>
		<p>Light: {this.state.kitchen}</p>
		</div>
	);
    }
}

axios.get(`http://www.reddit.com/r/reactjs.json`)
    .then(response => {
	const posts = response.data.data.children.map(
	    obj => obj.data
	);
	console.log(posts);
    })
    .catch(error => {
	console.error(error);
    });

fetch(`http://www.reddit.com/r/reactjs.json`)
    .then(response => {
	if(response.ok) {
	    return response.json();
	}
	throw new Error('Request failed');
    })
    .then(json => {
	const posts = res.data.data.children.map(
	    obj => obj.data
	);
	console.log(posts);
    })
    .catch(error => {
	console.error(error);
    });

ReactDOM.render(<Switch/>,
		document.querySelector('#root'));

// ReactDOM.render(<FileList files={testFiles}/>,
// 		document.querySelector('#root'));
