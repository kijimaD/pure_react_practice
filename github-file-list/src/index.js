import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';
import PropTypes from 'prop-types';
import Time from './Time';

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
	    Click Me!
	</button>
    );
}

ReactDOM.render(<FileList files={testFiles}/>,
		document.querySelector('#root'));
