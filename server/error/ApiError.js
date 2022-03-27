class ApiError extends Error { // extends === наследование от класса Error
    
    constructor(status, message) { // статус, например, 404; сообщение, например, страница не найдена.
        super(); // получение доступа к функциям класса Error
        this.status = status
        this.message = message
    }

    static MovedPermanently(message) {
        return new ApiError(301, message)
    }

    static Found (message) {
        return new ApiError(302, message)
    }

    static Forbidden (message) {
        return new ApiError(403, message)
    }

    static NotFound(message) {
        return new ApiError(404, message)
    }

    static InternetServerError(message) {
        return new ApiError(500, message)
    }

    static BadGateaway(message) {
        return new ApiError(502, message)
    }

    static ServiceUnavailable(message) {
        return new ApiError(503, message)
    }

    static GatewayTimeout(message) {
        return new ApiError(504, message)
    }

}

module.exports = ApiError