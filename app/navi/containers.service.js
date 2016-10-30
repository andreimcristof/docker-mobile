turn me into a module and import me. 

fetch('http://localhost:8083/containers', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
.then((response) => response.json())
.then((responseJson) => {
    self.state.loading = false;
    self.containers.dataSource = ds.cloneWithRows(responseJson)
})
.catch((err)=> {
    console.log(err)
    self.containers.dataSource = []
})
