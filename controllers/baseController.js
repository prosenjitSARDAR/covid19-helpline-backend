class BaseController {
    constructor() {

    }
    success(response, message, data = {}) {
        let successResponse = {
            success: true,
            message: message,
            status: 200,
            data: data
        }
        response.json(successResponse);
    }
    error(response, errors) {
        let errorResponse = {
            success: false,
            status: 504,
            errors: errors
        }
        response.json(errorResponse);
    }

}

module.exports = BaseController;