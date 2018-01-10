class ProjectApi {

  static fetchData() {
    const request = new Request(`https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`, {
        method: 'GET'
    });
    return fetch(request).then(response => {
        return response.json();
    }).catch(error => {
        return error;
    });
  }

}

export default ProjectApi;