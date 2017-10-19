export class DockerService {

  getDockerVersionAsync(){
    return fetch("http://localhost:5000/api/Docker").then(response => {
      return response.json();
    })
    .catch(err => {
      console.error(err)
    });
  }

}
