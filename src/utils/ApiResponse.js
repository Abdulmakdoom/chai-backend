class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode 
        this.data = data // this.data ko data sai fill kr detay hai
        this.message = message
        this.success = statusCode < 400
    }
}

export { ApiResponse }