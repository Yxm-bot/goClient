import { EventMgr } from "./base/EventMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {


    start () {
    }

    clickSend(){
       EventMgr.dispatchEvent("login")
    }


}
