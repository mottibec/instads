const TYPES = {
    ITransactionService: Symbol.for("ITransactionService"),
    ILiveLocation: Symbol.for("ILiveLocation"),
    IWebServer: Symbol.for("IWebServer"),
    IController: Symbol.for("IController"),
    IAuthProvider: Symbol.for("IAuthProvider"),
    TransactionController: Symbol.for("TransactionController"),
    UserController: Symbol.for("UserController"),
    TransactionRepository: Symbol.for("TransactionRepository"),
    UserRepository: Symbol.for("UserRepository"),
    UserService: Symbol.for("UserService"),
    TransactionService: Symbol.for("TransactionService"),
    JWTService: Symbol.for("JWTService"),
    AuthService: Symbol.for("AuthService"),
    DbManager: Symbol.for("dbManager"),
    IgService: Symbol.for("igService")
};

export { TYPES };