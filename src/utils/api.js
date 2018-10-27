function buildSearchRepositoriesURL(username) {
  return `https://api.github.com/users/${username}/repos`;
}

function buildSearchContributorsURL(repository) {
  return `https://api.github.com/repos/${repository}/contributors`;
}

export default {
  async searchRepositories(username) {
    try {
      const response = await fetch(buildSearchRepositoriesURL(username));

      if (!response.ok) {
        throw response;
      }

      return response.json();
    } catch (exception) { // Ignore any possible errors
      console.log(exception);

      return [];
    }
  },
  async searchContributors(repository) {
    try {
      const response = await fetch(buildSearchContributorsURL(repository));

      if (!response.ok) {
        throw response;
      }

      return response.json();
    } catch (exception) { // Ignore any possible errors
      console.log(exception);

      return [];
    }
  },
};
