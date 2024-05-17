const {ccclass, property} = cc._decorator;

@ccclass
export default class Login extends cc.Component {

    getReq(){
        this.httpRequest("http://127.0.0.1:7457/login","Post",{username:"alex0",password:"123456789"})
    }

    postReq(){
        this.httpRequest("http://127.0.0.1:7457/register","Post",{username:"alex1",password:"123456789"})
    }


    httpRequest(httpurl:string,type:string,body:any={}){
        // 调用示例
        let xhr=new XMLHttpRequest()
        let url=httpurl
        let bodyData
        bodyData=JSON.stringify(body)
        
        // 定义请求完成时的回调函数
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
            // 请求成功，处理返回的数据
            console.log(xhr.responseText);
            } else {
            // 请求失败，处理错误信息
            console.error('Request failed with status code ' + xhr.status);
            }
        };
        
        // 定义请求出错时的回调函数
        xhr.onerror = function() {
            console.error('Request failed');
        };
        
        xhr.open(type,url,true)

        xhr.setRequestHeader('Content-Type', 'application/json'); // 设置请求的 Content-Type
        // 发送 HTTP 请求
        xhr.send(bodyData);
    }
}
