import axios from 'axios'

// add https request methods
const httpGetHeaders = () => ({
    Accept: 'application/json',
    'Content-Type': 'application/json'
});

const httpGetRequest = endpoint => {
    axios({
        method: 'GET',
        url: endpoint,
        headers: httpGetHeaders()
      }).then(response => {
        console.log('====================================');
        console.log('GET: ', endpoint)
        console.log('response: ', response.data)
        console.log('====================================');
        return response
      }).catch(err => {
        console.log('====================================');
        console.log('ERR: ', err)
        console.log('====================================');
      })
};

export { httpGetRequest as default, httpGetHeaders }