/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";
const protobuf = require("../libs/protobuf.js");
var $protobuf =  protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GM = (function() {

    /**
     * Namespace GM.
     * @exports GM
     * @namespace
     */
    var GM = {};

    GM.GM = (function() {

        /**
         * Constructs a new GM service.
         * @memberof GM
         * @classdesc Represents a GM
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function GM(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (GM.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = GM;

        /**
         * Creates new GM service using the specified rpc implementation.
         * @function create
         * @memberof GM.GM
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {GM} RPC service. Useful where requests and/or responses are streamed.
         */
        GM.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link GM.GM#login}.
         * @memberof GM.GM
         * @typedef LoginCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {GM.empty} [response] empty
         */

        /**
         * Calls Login.
         * @function login
         * @memberof GM.GM
         * @instance
         * @param {GM.IAccount} request Account message or plain object
         * @param {GM.GM.LoginCallback} callback Node-style callback called with the error, if any, and empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GM.prototype.login = function login(request, callback) {
            return this.rpcCall(login, $root.GM.Account, $root.GM.empty, request, callback);
        }, "name", { value: "Login" });

        /**
         * Calls Login.
         * @function login
         * @memberof GM.GM
         * @instance
         * @param {GM.IAccount} request Account message or plain object
         * @returns {Promise<GM.empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link GM.GM#regis}.
         * @memberof GM.GM
         * @typedef RegisCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {GM.empty} [response] empty
         */

        /**
         * Calls Regis.
         * @function regis
         * @memberof GM.GM
         * @instance
         * @param {GM.IRegistrations} request Registrations message or plain object
         * @param {GM.GM.RegisCallback} callback Node-style callback called with the error, if any, and empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(GM.prototype.regis = function regis(request, callback) {
            return this.rpcCall(regis, $root.GM.Registrations, $root.GM.empty, request, callback);
        }, "name", { value: "Regis" });

        /**
         * Calls Regis.
         * @function regis
         * @memberof GM.GM
         * @instance
         * @param {GM.IRegistrations} request Registrations message or plain object
         * @returns {Promise<GM.empty>} Promise
         * @variation 2
         */

        return GM;
    })();

    /**
     * ErrorCode enum.
     * @name GM.ErrorCode
     * @enum {number}
     * @property {number} start=0 start value
     * @property {number} OK=200 OK value
     * @property {number} accountErr=10001 accountErr value
     * @property {number} accountNull=10002 accountNull value
     */
    GM.ErrorCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "start"] = 0;
        values[valuesById[200] = "OK"] = 200;
        values[valuesById[10001] = "accountErr"] = 10001;
        values[valuesById[10002] = "accountNull"] = 10002;
        return values;
    })();

    GM.empty = (function() {

        /**
         * Properties of an empty.
         * @memberof GM
         * @interface Iempty
         */

        /**
         * Constructs a new empty.
         * @memberof GM
         * @classdesc Represents an empty.
         * @implements Iempty
         * @constructor
         * @param {GM.Iempty=} [properties] Properties to set
         */
        function empty(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new empty instance using the specified properties.
         * @function create
         * @memberof GM.empty
         * @static
         * @param {GM.Iempty=} [properties] Properties to set
         * @returns {GM.empty} empty instance
         */
        empty.create = function create(properties) {
            return new empty(properties);
        };

        /**
         * Encodes the specified empty message. Does not implicitly {@link GM.empty.verify|verify} messages.
         * @function encode
         * @memberof GM.empty
         * @static
         * @param {GM.Iempty} message empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        empty.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified empty message, length delimited. Does not implicitly {@link GM.empty.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GM.empty
         * @static
         * @param {GM.Iempty} message empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        empty.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an empty message from the specified reader or buffer.
         * @function decode
         * @memberof GM.empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GM.empty} empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        empty.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GM.empty();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an empty message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GM.empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GM.empty} empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        empty.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an empty message.
         * @function verify
         * @memberof GM.empty
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        empty.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an empty message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GM.empty
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GM.empty} empty
         */
        empty.fromObject = function fromObject(object) {
            if (object instanceof $root.GM.empty)
                return object;
            return new $root.GM.empty();
        };

        /**
         * Creates a plain object from an empty message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GM.empty
         * @static
         * @param {GM.empty} message empty
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        empty.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this empty to JSON.
         * @function toJSON
         * @memberof GM.empty
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        empty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return empty;
    })();

    GM.Registrations = (function() {

        /**
         * Properties of a Registrations.
         * @memberof GM
         * @interface IRegistrations
         * @property {string|null} [username] Registrations username
         * @property {string|null} [password] Registrations password
         */

        /**
         * Constructs a new Registrations.
         * @memberof GM
         * @classdesc Represents a Registrations.
         * @implements IRegistrations
         * @constructor
         * @param {GM.IRegistrations=} [properties] Properties to set
         */
        function Registrations(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Registrations username.
         * @member {string} username
         * @memberof GM.Registrations
         * @instance
         */
        Registrations.prototype.username = "";

        /**
         * Registrations password.
         * @member {string} password
         * @memberof GM.Registrations
         * @instance
         */
        Registrations.prototype.password = "";

        /**
         * Creates a new Registrations instance using the specified properties.
         * @function create
         * @memberof GM.Registrations
         * @static
         * @param {GM.IRegistrations=} [properties] Properties to set
         * @returns {GM.Registrations} Registrations instance
         */
        Registrations.create = function create(properties) {
            return new Registrations(properties);
        };

        /**
         * Encodes the specified Registrations message. Does not implicitly {@link GM.Registrations.verify|verify} messages.
         * @function encode
         * @memberof GM.Registrations
         * @static
         * @param {GM.IRegistrations} message Registrations message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Registrations.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified Registrations message, length delimited. Does not implicitly {@link GM.Registrations.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GM.Registrations
         * @static
         * @param {GM.IRegistrations} message Registrations message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Registrations.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Registrations message from the specified reader or buffer.
         * @function decode
         * @memberof GM.Registrations
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GM.Registrations} Registrations
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Registrations.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GM.Registrations();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Registrations message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GM.Registrations
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GM.Registrations} Registrations
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Registrations.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Registrations message.
         * @function verify
         * @memberof GM.Registrations
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Registrations.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates a Registrations message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GM.Registrations
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GM.Registrations} Registrations
         */
        Registrations.fromObject = function fromObject(object) {
            if (object instanceof $root.GM.Registrations)
                return object;
            var message = new $root.GM.Registrations();
            if (object.username != null)
                message.username = String(object.username);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a Registrations message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GM.Registrations
         * @static
         * @param {GM.Registrations} message Registrations
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Registrations.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.username = "";
                object.password = "";
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this Registrations to JSON.
         * @function toJSON
         * @memberof GM.Registrations
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Registrations.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Registrations;
    })();

    GM.RegistrationsNoti = (function() {

        /**
         * Properties of a RegistrationsNoti.
         * @memberof GM
         * @interface IRegistrationsNoti
         * @property {GM.ErrorCode|null} [err] RegistrationsNoti err
         */

        /**
         * Constructs a new RegistrationsNoti.
         * @memberof GM
         * @classdesc Represents a RegistrationsNoti.
         * @implements IRegistrationsNoti
         * @constructor
         * @param {GM.IRegistrationsNoti=} [properties] Properties to set
         */
        function RegistrationsNoti(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegistrationsNoti err.
         * @member {GM.ErrorCode} err
         * @memberof GM.RegistrationsNoti
         * @instance
         */
        RegistrationsNoti.prototype.err = 0;

        /**
         * Creates a new RegistrationsNoti instance using the specified properties.
         * @function create
         * @memberof GM.RegistrationsNoti
         * @static
         * @param {GM.IRegistrationsNoti=} [properties] Properties to set
         * @returns {GM.RegistrationsNoti} RegistrationsNoti instance
         */
        RegistrationsNoti.create = function create(properties) {
            return new RegistrationsNoti(properties);
        };

        /**
         * Encodes the specified RegistrationsNoti message. Does not implicitly {@link GM.RegistrationsNoti.verify|verify} messages.
         * @function encode
         * @memberof GM.RegistrationsNoti
         * @static
         * @param {GM.IRegistrationsNoti} message RegistrationsNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegistrationsNoti.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.err);
            return writer;
        };

        /**
         * Encodes the specified RegistrationsNoti message, length delimited. Does not implicitly {@link GM.RegistrationsNoti.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GM.RegistrationsNoti
         * @static
         * @param {GM.IRegistrationsNoti} message RegistrationsNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegistrationsNoti.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegistrationsNoti message from the specified reader or buffer.
         * @function decode
         * @memberof GM.RegistrationsNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GM.RegistrationsNoti} RegistrationsNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegistrationsNoti.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GM.RegistrationsNoti();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.err = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RegistrationsNoti message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GM.RegistrationsNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GM.RegistrationsNoti} RegistrationsNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegistrationsNoti.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegistrationsNoti message.
         * @function verify
         * @memberof GM.RegistrationsNoti
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegistrationsNoti.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err != null && message.hasOwnProperty("err"))
                switch (message.err) {
                default:
                    return "err: enum value expected";
                case 0:
                case 200:
                case 10001:
                case 10002:
                    break;
                }
            return null;
        };

        /**
         * Creates a RegistrationsNoti message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GM.RegistrationsNoti
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GM.RegistrationsNoti} RegistrationsNoti
         */
        RegistrationsNoti.fromObject = function fromObject(object) {
            if (object instanceof $root.GM.RegistrationsNoti)
                return object;
            var message = new $root.GM.RegistrationsNoti();
            switch (object.err) {
            case "start":
            case 0:
                message.err = 0;
                break;
            case "OK":
            case 200:
                message.err = 200;
                break;
            case "accountErr":
            case 10001:
                message.err = 10001;
                break;
            case "accountNull":
            case 10002:
                message.err = 10002;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a RegistrationsNoti message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GM.RegistrationsNoti
         * @static
         * @param {GM.RegistrationsNoti} message RegistrationsNoti
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegistrationsNoti.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.err = options.enums === String ? "start" : 0;
            if (message.err != null && message.hasOwnProperty("err"))
                object.err = options.enums === String ? $root.GM.ErrorCode[message.err] : message.err;
            return object;
        };

        /**
         * Converts this RegistrationsNoti to JSON.
         * @function toJSON
         * @memberof GM.RegistrationsNoti
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegistrationsNoti.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RegistrationsNoti;
    })();

    GM.Account = (function() {

        /**
         * Properties of an Account.
         * @memberof GM
         * @interface IAccount
         * @property {string|null} [username] Account username
         * @property {string|null} [password] Account password
         */

        /**
         * Constructs a new Account.
         * @memberof GM
         * @classdesc Represents an Account.
         * @implements IAccount
         * @constructor
         * @param {GM.IAccount=} [properties] Properties to set
         */
        function Account(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Account username.
         * @member {string} username
         * @memberof GM.Account
         * @instance
         */
        Account.prototype.username = "";

        /**
         * Account password.
         * @member {string} password
         * @memberof GM.Account
         * @instance
         */
        Account.prototype.password = "";

        /**
         * Creates a new Account instance using the specified properties.
         * @function create
         * @memberof GM.Account
         * @static
         * @param {GM.IAccount=} [properties] Properties to set
         * @returns {GM.Account} Account instance
         */
        Account.create = function create(properties) {
            return new Account(properties);
        };

        /**
         * Encodes the specified Account message. Does not implicitly {@link GM.Account.verify|verify} messages.
         * @function encode
         * @memberof GM.Account
         * @static
         * @param {GM.IAccount} message Account message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Account.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified Account message, length delimited. Does not implicitly {@link GM.Account.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GM.Account
         * @static
         * @param {GM.IAccount} message Account message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Account.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Account message from the specified reader or buffer.
         * @function decode
         * @memberof GM.Account
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GM.Account} Account
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Account.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GM.Account();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Account message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GM.Account
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GM.Account} Account
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Account.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Account message.
         * @function verify
         * @memberof GM.Account
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Account.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates an Account message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GM.Account
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GM.Account} Account
         */
        Account.fromObject = function fromObject(object) {
            if (object instanceof $root.GM.Account)
                return object;
            var message = new $root.GM.Account();
            if (object.username != null)
                message.username = String(object.username);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from an Account message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GM.Account
         * @static
         * @param {GM.Account} message Account
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Account.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.username = "";
                object.password = "";
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this Account to JSON.
         * @function toJSON
         * @memberof GM.Account
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Account.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Account;
    })();

    GM.AccountNoti = (function() {

        /**
         * Properties of an AccountNoti.
         * @memberof GM
         * @interface IAccountNoti
         * @property {GM.ErrorCode|null} [err] AccountNoti err
         */

        /**
         * Constructs a new AccountNoti.
         * @memberof GM
         * @classdesc Represents an AccountNoti.
         * @implements IAccountNoti
         * @constructor
         * @param {GM.IAccountNoti=} [properties] Properties to set
         */
        function AccountNoti(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountNoti err.
         * @member {GM.ErrorCode} err
         * @memberof GM.AccountNoti
         * @instance
         */
        AccountNoti.prototype.err = 0;

        /**
         * Creates a new AccountNoti instance using the specified properties.
         * @function create
         * @memberof GM.AccountNoti
         * @static
         * @param {GM.IAccountNoti=} [properties] Properties to set
         * @returns {GM.AccountNoti} AccountNoti instance
         */
        AccountNoti.create = function create(properties) {
            return new AccountNoti(properties);
        };

        /**
         * Encodes the specified AccountNoti message. Does not implicitly {@link GM.AccountNoti.verify|verify} messages.
         * @function encode
         * @memberof GM.AccountNoti
         * @static
         * @param {GM.IAccountNoti} message AccountNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountNoti.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.err != null && Object.hasOwnProperty.call(message, "err"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.err);
            return writer;
        };

        /**
         * Encodes the specified AccountNoti message, length delimited. Does not implicitly {@link GM.AccountNoti.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GM.AccountNoti
         * @static
         * @param {GM.IAccountNoti} message AccountNoti message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountNoti.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountNoti message from the specified reader or buffer.
         * @function decode
         * @memberof GM.AccountNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GM.AccountNoti} AccountNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountNoti.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GM.AccountNoti();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.err = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccountNoti message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GM.AccountNoti
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GM.AccountNoti} AccountNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountNoti.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountNoti message.
         * @function verify
         * @memberof GM.AccountNoti
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountNoti.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.err != null && message.hasOwnProperty("err"))
                switch (message.err) {
                default:
                    return "err: enum value expected";
                case 0:
                case 200:
                case 10001:
                case 10002:
                    break;
                }
            return null;
        };

        /**
         * Creates an AccountNoti message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GM.AccountNoti
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GM.AccountNoti} AccountNoti
         */
        AccountNoti.fromObject = function fromObject(object) {
            if (object instanceof $root.GM.AccountNoti)
                return object;
            var message = new $root.GM.AccountNoti();
            switch (object.err) {
            case "start":
            case 0:
                message.err = 0;
                break;
            case "OK":
            case 200:
                message.err = 200;
                break;
            case "accountErr":
            case 10001:
                message.err = 10001;
                break;
            case "accountNull":
            case 10002:
                message.err = 10002;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from an AccountNoti message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GM.AccountNoti
         * @static
         * @param {GM.AccountNoti} message AccountNoti
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountNoti.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.err = options.enums === String ? "start" : 0;
            if (message.err != null && message.hasOwnProperty("err"))
                object.err = options.enums === String ? $root.GM.ErrorCode[message.err] : message.err;
            return object;
        };

        /**
         * Converts this AccountNoti to JSON.
         * @function toJSON
         * @memberof GM.AccountNoti
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountNoti.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountNoti;
    })();

    return GM;
})();

module.exports = $root;
