const errorHandler = ((err, _req, res, _next) => {
    if (err.type === 'entity.parse.failed') {
        return res.status(400).json({
            message: `Invalid JSON request.`
        });
    } else if (err.status === 413) {
        return res.status(413).json({
            message: `The request body exceeds the maximum permitted limit.`
        });
    } else {
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
});

export default errorHandler;