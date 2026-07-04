const jwt = require("jsonwebtoken");

const userExtractor = async (request, response, next) => {
    const token = request.cookies?.accessToken;
    try {
        if (!token) {
        return response.status(401);
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decoded.id);
    request.user = user;
    } 
    catch (error) {
        return response.status(403);
    }
    next();
};

module.exports = { userExtractor };