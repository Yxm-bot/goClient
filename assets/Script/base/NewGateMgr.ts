let _external: string[] = []
export namespace NewGateMgr {
    let _websocket: WebSocket = null
    let _proto: { [name: string]: any[] } = {}

    export function connect(){
        _websocket = new WebSocket("ws://127.0.0.1:8080");
        _websocket.onopen = function(event) {
            console.log("WebSocket connection established.");
        };
        
        _websocket.onmessage = onMessage
        
        _websocket.onclose = function(event) {
            console.log("WebSocket connection closed.");
        };

    }

    export function close() {
        _websocket.close()
    }


    function onMessage(data) { 
        console.log("data=====",data)   
    }

   // export function notify(route: string, reqName, reqBody, matedata?: Map<string, string>) {
    export function notify(reqName, reqBody, matedata?: Map<string, string>) {
        let sender = () => {
            //let parts = route.split('.')
/*             let header = {}
            if (parts.length >= 4) {
                header['Micro-ServiceID'] = parts[0]
                header['Micro-Service'] = parts[1]
                header['Micro-Endpoint'] = [parts[2], parts[3]].join('.')
            } else {
                header['Micro-Service'] = parts[0]
                header['Micro-Endpoint'] = [parts[1], parts[2]].join('.')
            }
            if (matedata) {
                matedata.forEach((v, k) => {
                    header[k] = v
                })
            } */
            let data = _encodePacket(reqName, reqBody)
            //let bytes = transport.Message.encode({ header: header, body: data }).finish()

            //_websocket.send(bytes.slice().buffer)
            _websocket.send(data)

            ////console.log("==== on notfiy " + route)
            console.log("reqBody===",reqBody)
        }
        sender()
        // checkReady(sender)
    }

    export function httpRequest() {
        // 发送预检请求
        let xhr = new XMLHttpRequest();
        // 发送实际请求
        let postData = {
            username: 'elk',
            password: '123456789'
        };

        let xhr2 = new XMLHttpRequest();
        xhr2.open('POST', 'http://127.0.0.1:8080/login');
        xhr2.setRequestHeader('Content-Type', 'application/json');
        xhr2.onreadystatechange = () => {
            if (xhr2.readyState === 4) {
                if (xhr2.status === 200) {
                    let response = JSON.parse(xhr2.responseText);
                    console.log(response);
                } else {
                    console.error(xhr2.statusText);
                }
            }
        };
        xhr2.send(JSON.stringify(postData));
        
    }
    function _encodePacket(name, packet) {
        // cc.log("====_encodePacter111================")
        let p = _findProto(name)//proto[name]
        if (!p || !p.proto) {
            cc.error('encode Packet : Unknown Packet = ' + name)
            // throw new ReferenceError('encode Packet : Unknown Packet = ' + name)
            return
        }

        let buf = p.proto.create(packet)
        buf = p.proto.encode(buf).finish()
        // cc.log("== ==_encodePacter2=============")
        return buf
    }

    export function decodePacket(name, data) {
        return _decodePacket(name, data)
    }

    function _decodePacket(name, data) {
        let p = _findProto(name)//proto[name]
        if (!p || !p.proto) {
            cc.log('Decode Packet : Unknown Proto = ' + name)
            // throw new ReferenceError('Decode Packet : Unknown Proto = ' + name)
            return null
        }

        let packet = null
        try {
            packet = p.proto.decode(data)
        } catch {
            packet = {}
        }

        return { module: p.module, name: name, packet: packet }
    }


    export function setProto(name, proto, external = false) {
        if (_proto[name])
            delete _proto[name]

        _proto[name] = proto
        if (external) {
            _external.push(name)
        }
    }

    export function unsetProto(name) {
        if (_proto[name])
            delete _proto[name]

        _external = _external.filter(i => i !== name)
    }

    function _findProto(name) {
        for (let key in _proto) {
            if (_proto[key] && _proto[key][name])
                return { module: key, proto: _proto[key][name] }
        }

        return null
    }

}