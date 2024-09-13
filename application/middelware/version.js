const semver = require('semver');

exports.versionMiddleware = (version) => {
    return (req, res, next) => {
        if (req.headers['x-version']) {
            if (semver.eq(req.headers['x-version'], version)) {
                return next();
            }
        }
        return next('route');
    };
};

