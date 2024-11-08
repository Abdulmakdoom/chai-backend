class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack = ""
    ){
        // over-write kr rahe hai
        super(message)
        this.statusCode = statusCode // this.statusCode ko overwrite kr rahe hai statusCode sai
        this.data = null  // study self
        this.message = message
        this.success = false;
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor) // (reference, this.constructor)
        }

    }
}

export {ApiError}

// nodejs.org/api/errors.html -- documentation