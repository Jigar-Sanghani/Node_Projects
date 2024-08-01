const isValid = (req, res, next) => {
    let { userName, email, password } = req.params;
    if (userName && email && password) {
        next();
    } else {
        return res.status(400).json({ error: "Name and Email are required." });
    }
};

module.exports = isValid;