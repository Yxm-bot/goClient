
import { EventMgr } from "./base/EventMgr";
import { NewGateMgr } from "./base/NewGateMgr";
import { GM } from "./proto/account";

export namespace LoginSrv {

   export function init(){
      _matchSvrRegister()
      
   }

   function _matchSvrRegister() {
      //NewGateMgr.connect()
      NewGateMgr.setProto("GM", GM)
      EventMgr.on("login", sendLogin)
      EventMgr.on("resgiter", sendRegster)
   }


   export function  sendLogin(){
      let postData = {
         username: 'elk1',
         password: '1234567899'
     };
      NewGateMgr.httpRequest(postData,"http://127.0.0.1:8080/login")
     // NewGateMgr.notify("Account",{username:"lisi",password:"123456"})
   }

   export function  sendRegster(){
      let postData = {
         username: 'elk1',
         password: '1234567899'
     };
      NewGateMgr.httpRequest(postData,"http://127.0.0.1:8080/register")
     // NewGateMgr.notify("Account",{username:"lisi",password:"123456"})
   }


}

LoginSrv.init()