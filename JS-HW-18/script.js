const BASE_URI = 'https://jsonplaceholder.typicode.com/posts';

const renderPosts = (posts) => {
    getPostsData().then((response) => {
        const postsElem = document.getElementById('posts-id');
        for(let post of response) {
            // render post itself
            const postElem = document.createElement('div');
            postElem.classList.add('post');
            const postHeadElem = document.createElement('h3');
            postHeadElem.innerText = post['title'];
            postElem.append(postHeadElem);
            const postTxtElem = document.createElement('div');
            postTxtElem.innerText  = post['body'];
            postTxtElem.classList.add('post-body');
            postElem.append(postTxtElem);
            const commsButtElem = document.createElement('button');
            commsButtElem.innerText = "Show comments";
            commsButtElem.postID = post['id'];
            commsButtElem.commsShowed = false;
            commsButtElem.addEventListener('click', showHideComms);
            postElem.append(commsButtElem);
            postsElem.appendChild(postElem);
        }
    });
}

const showHideComms = (event) => {
    if(!event.target.commsShowed) {
        // get the comments data and render them
        getPostComms(event.target.postID).then((response) => {
            // comments block
            const commsElem = document.createElement('div');
            commsElem.id = `comms-for-${event.target.postID}-id`;
            commsElem.classList.add('comments');
            // add comments to block
            for(let oneComm of response) {
                const commElem = document.createElement('div');
                commElem.classList.add('comment');
                // title of comment
                const commElemHead = document.createElement('h4');
                commElemHead.innerText = oneComm['name'];
                // text of comment
                const commElemTxt = document.createElement('div');
                commElemTxt.innerText = oneComm['body'];
                // author (email) of comment
                const commElemAuth = document.createElement('a');
                commElemAuth.setAttribute('href',`mailto:${oneComm['email']}`);
                commElemAuth.innerText = oneComm['email'];
                // add comment parts to comment
                commElem.append(commElemHead, commElemTxt, commElemAuth);
                // add comment to block
                commsElem.append(commElem);
            }
            // add comments to post
            event.target.previousElementSibling.append(commsElem);
            // mark that comments are showed
            event.target.commsShowed = true;
            event.target.innerText = 'Hide comments';
        });
    } else {
        // hide comments
        document.getElementById(`comms-for-${event.target.postID}-id`).remove();
        // mark that comments are hidden
        event.target.commsShowed = false;
        event.target.innerText = 'Show comments';
    }
}

const getPostComms = (postId) => {
    return new Promise((resolve) => {
        const xhrComms = new XMLHttpRequest();
        xhrComms.open('GET', BASE_URI + `/${postId}/comments`);
        xhrComms.responseType = 'json';
        xhrComms.send();
        xhrComms.onload = () => {
            resolve(xhrComms.response);
        }
    });
}

const getPostsData = () => {
    return new Promise((resolve) => {
        const xhrPosts = new XMLHttpRequest();
        xhrPosts.open('GET', BASE_URI);
        xhrPosts.responseType = 'json';
        xhrPosts.send();
        xhrPosts.onload = () => {
            resolve(xhrPosts.response);
        }
    });
}

renderPosts();