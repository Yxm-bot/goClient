import * as $protobuf from "protobufjs";
/** Namespace GM. */
export namespace GM {

    /** Represents a GM */
    class GM extends $protobuf.rpc.Service {

        /**
         * Constructs a new GM service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new GM service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): GM;

        /**
         * Calls Login.
         * @param request Account message or plain object
         * @param callback Node-style callback called with the error, if any, and empty
         */
        public login(request: GM.IAccount, callback: GM.GM.LoginCallback): void;

        /**
         * Calls Login.
         * @param request Account message or plain object
         * @returns Promise
         */
        public login(request: GM.IAccount): Promise<GM.empty>;

        /**
         * Calls Regis.
         * @param request Registrations message or plain object
         * @param callback Node-style callback called with the error, if any, and empty
         */
        public regis(request: GM.IRegistrations, callback: GM.GM.RegisCallback): void;

        /**
         * Calls Regis.
         * @param request Registrations message or plain object
         * @returns Promise
         */
        public regis(request: GM.IRegistrations): Promise<GM.empty>;
    }

    namespace GM {

        /**
         * Callback as used by {@link GM.GM#login}.
         * @param error Error, if any
         * @param [response] empty
         */
        type LoginCallback = (error: (Error|null), response?: GM.empty) => void;

        /**
         * Callback as used by {@link GM.GM#regis}.
         * @param error Error, if any
         * @param [response] empty
         */
        type RegisCallback = (error: (Error|null), response?: GM.empty) => void;
    }

    /** ErrorCode enum. */
    enum ErrorCode {
        start = 0,
        OK = 200,
        accountErr = 10001,
        accountNull = 10002
    }

    /** Properties of an empty. */
    interface Iempty {
    }

    /** Represents an empty. */
    class empty implements Iempty {

        /**
         * Constructs a new empty.
         * @param [properties] Properties to set
         */
        constructor(properties?: GM.Iempty);

        /**
         * Creates a new empty instance using the specified properties.
         * @param [properties] Properties to set
         * @returns empty instance
         */
        public static create(properties?: GM.Iempty): GM.empty;

        /**
         * Encodes the specified empty message. Does not implicitly {@link GM.empty.verify|verify} messages.
         * @param message empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GM.Iempty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified empty message, length delimited. Does not implicitly {@link GM.empty.verify|verify} messages.
         * @param message empty message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GM.Iempty, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an empty message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GM.empty;

        /**
         * Decodes an empty message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GM.empty;

        /**
         * Verifies an empty message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an empty message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns empty
         */
        public static fromObject(object: { [k: string]: any }): GM.empty;

        /**
         * Creates a plain object from an empty message. Also converts values to other types if specified.
         * @param message empty
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GM.empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this empty to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Registrations. */
    interface IRegistrations {

        /** Registrations username */
        username?: (string|null);

        /** Registrations password */
        password?: (string|null);
    }

    /** Represents a Registrations. */
    class Registrations implements IRegistrations {

        /**
         * Constructs a new Registrations.
         * @param [properties] Properties to set
         */
        constructor(properties?: GM.IRegistrations);

        /** Registrations username. */
        public username: string;

        /** Registrations password. */
        public password: string;

        /**
         * Creates a new Registrations instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Registrations instance
         */
        public static create(properties?: GM.IRegistrations): GM.Registrations;

        /**
         * Encodes the specified Registrations message. Does not implicitly {@link GM.Registrations.verify|verify} messages.
         * @param message Registrations message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GM.IRegistrations, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Registrations message, length delimited. Does not implicitly {@link GM.Registrations.verify|verify} messages.
         * @param message Registrations message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GM.IRegistrations, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Registrations message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Registrations
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GM.Registrations;

        /**
         * Decodes a Registrations message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Registrations
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GM.Registrations;

        /**
         * Verifies a Registrations message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Registrations message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Registrations
         */
        public static fromObject(object: { [k: string]: any }): GM.Registrations;

        /**
         * Creates a plain object from a Registrations message. Also converts values to other types if specified.
         * @param message Registrations
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GM.Registrations, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Registrations to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RegistrationsNoti. */
    interface IRegistrationsNoti {

        /** RegistrationsNoti err */
        err?: (GM.ErrorCode|null);
    }

    /** Represents a RegistrationsNoti. */
    class RegistrationsNoti implements IRegistrationsNoti {

        /**
         * Constructs a new RegistrationsNoti.
         * @param [properties] Properties to set
         */
        constructor(properties?: GM.IRegistrationsNoti);

        /** RegistrationsNoti err. */
        public err: GM.ErrorCode;

        /**
         * Creates a new RegistrationsNoti instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegistrationsNoti instance
         */
        public static create(properties?: GM.IRegistrationsNoti): GM.RegistrationsNoti;

        /**
         * Encodes the specified RegistrationsNoti message. Does not implicitly {@link GM.RegistrationsNoti.verify|verify} messages.
         * @param message RegistrationsNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GM.IRegistrationsNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegistrationsNoti message, length delimited. Does not implicitly {@link GM.RegistrationsNoti.verify|verify} messages.
         * @param message RegistrationsNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GM.IRegistrationsNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegistrationsNoti message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegistrationsNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GM.RegistrationsNoti;

        /**
         * Decodes a RegistrationsNoti message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegistrationsNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GM.RegistrationsNoti;

        /**
         * Verifies a RegistrationsNoti message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegistrationsNoti message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegistrationsNoti
         */
        public static fromObject(object: { [k: string]: any }): GM.RegistrationsNoti;

        /**
         * Creates a plain object from a RegistrationsNoti message. Also converts values to other types if specified.
         * @param message RegistrationsNoti
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GM.RegistrationsNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegistrationsNoti to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Account. */
    interface IAccount {

        /** Account username */
        username?: (string|null);

        /** Account password */
        password?: (string|null);
    }

    /** Represents an Account. */
    class Account implements IAccount {

        /**
         * Constructs a new Account.
         * @param [properties] Properties to set
         */
        constructor(properties?: GM.IAccount);

        /** Account username. */
        public username: string;

        /** Account password. */
        public password: string;

        /**
         * Creates a new Account instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Account instance
         */
        public static create(properties?: GM.IAccount): GM.Account;

        /**
         * Encodes the specified Account message. Does not implicitly {@link GM.Account.verify|verify} messages.
         * @param message Account message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GM.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Account message, length delimited. Does not implicitly {@link GM.Account.verify|verify} messages.
         * @param message Account message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GM.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Account message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Account
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GM.Account;

        /**
         * Decodes an Account message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Account
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GM.Account;

        /**
         * Verifies an Account message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Account message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Account
         */
        public static fromObject(object: { [k: string]: any }): GM.Account;

        /**
         * Creates a plain object from an Account message. Also converts values to other types if specified.
         * @param message Account
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GM.Account, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Account to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccountNoti. */
    interface IAccountNoti {

        /** AccountNoti err */
        err?: (GM.ErrorCode|null);
    }

    /** Represents an AccountNoti. */
    class AccountNoti implements IAccountNoti {

        /**
         * Constructs a new AccountNoti.
         * @param [properties] Properties to set
         */
        constructor(properties?: GM.IAccountNoti);

        /** AccountNoti err. */
        public err: GM.ErrorCode;

        /**
         * Creates a new AccountNoti instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountNoti instance
         */
        public static create(properties?: GM.IAccountNoti): GM.AccountNoti;

        /**
         * Encodes the specified AccountNoti message. Does not implicitly {@link GM.AccountNoti.verify|verify} messages.
         * @param message AccountNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GM.IAccountNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountNoti message, length delimited. Does not implicitly {@link GM.AccountNoti.verify|verify} messages.
         * @param message AccountNoti message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GM.IAccountNoti, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountNoti message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GM.AccountNoti;

        /**
         * Decodes an AccountNoti message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountNoti
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GM.AccountNoti;

        /**
         * Verifies an AccountNoti message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountNoti message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountNoti
         */
        public static fromObject(object: { [k: string]: any }): GM.AccountNoti;

        /**
         * Creates a plain object from an AccountNoti message. Also converts values to other types if specified.
         * @param message AccountNoti
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GM.AccountNoti, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountNoti to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
