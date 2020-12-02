const jwt = require("jsonwebtoken");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const header = req.headers["x-ms-client-principal"];
    const encoded = Buffer.from(header, "base64");
    const decoded = encoded.toString("ascii");

    const clientPrincipal = JSON.parse(decoded)
    const token = generateAccessToken(clientPrincipal);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: token
    };
}

function generateAccessToken(userobject) {
    // expires after half and hour (1800 seconds = 30 minutes)
    return jwt.sign(userobject, process.env.JWT_KEY, { expiresIn: '1800s' });

}