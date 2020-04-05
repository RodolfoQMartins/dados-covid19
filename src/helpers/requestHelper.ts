
const myHeaders = new Headers({"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
"x-rapidapi-key": "3093176f50msh97597af84c57bb6p11de59jsn83856a35bb52"});

const myInit = {
    method: 'GET',
    headers: myHeaders
};

export const requestApi = (apiUrl: string, path: string) => {
    return fetch(apiUrl + path, myInit)
    .then(function(response) {
      return response.json();
    })
}

               

