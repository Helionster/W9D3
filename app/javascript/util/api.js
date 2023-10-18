const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    ...options.headers
  };

  return await fetch(url, options);
}

function followUser(id) {
  customFetch("user_follow_url", users[id])
}

function unfollowUser(id) {
  customFetch("user_follow_url", users[id])
}

