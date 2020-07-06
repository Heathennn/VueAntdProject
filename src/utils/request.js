import axios from 'axios';
const BASE_URL =  '/';
const service = axios.create({
    baseURL: BASE_URL,
    timeout: 15000,
    withCredentials: true,
});

service.interceptors.request.use(config => {
    // add some param in header
    return config;
}, error => {
    Promise.reject(error);
});

service.interceptors.response.use(
    response => {
        let headers = response.headers;
        let data = response.data || {};
        // if (data.retCode !== '0000') {
        //     return Promise.reject(data);
        // }

        return response.data;
    },
    error => {
        return Promise.reject(error);
    });

// export default service

function checkStatus(response) {
    return response;
}

const request = (config) => {
    return service.request(config).then(checkStatus);
};

export const GET = (url, data, config) => {
    const CONF = {
        url,
        method: 'get',
        params: data,
    };
    return request({...CONF, ...config});
};

export const POST = (url, params, data, config) => {
    const CONF = {
        url,
        method: 'post',
        params,
        data,
    };
    return request({...CONF, ...config});
};

export const PUT = (url, data, config) => {
    const CONF = {
        url,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        method: 'put',
        data,
    };
    return request({...CONF, ...config});
};

export const DELETE = (url, data, config) => {
    const CONF = {
        url,
        method: 'delete',
        data,
    };
    return request({...CONF, ...config});
};
