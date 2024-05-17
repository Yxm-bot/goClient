
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
   }


   export function  sendLogin(){
      NewGateMgr.httpRequest()
     // NewGateMgr.notify("Account",{username:"lisi",password:"123456"})
   }


}

LoginSrv.init()