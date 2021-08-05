import axios,{ AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
import nprogress  from 'nprogress'
import 'nprogress/nprogress.css'

axios.interceptors.request.use((config :AxiosRequestConfig) => {
    console.log(config)
    nprogress.start()
    return config
},(error) => {
    return Promise.reject(error);
});
axios.interceptors.response.use((response:AxiosResponse) => {
    const data = response.data
    nprogress.done();
    nprogress.remove();
    if(data.resCode !== 0){
        return Promise.reject(data);
    }
    else{
        return data;
    }
},(error) => {
    nprogress.done();
    nprogress.remove();
    return Promise.reject(error);
});

export default axios;