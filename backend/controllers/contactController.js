const submitContact = (req, res) => {

    const {
        name,
        email,
        subject,
        message
    } = req.body;

    if (
        !name ||
        !email ||
        !subject ||
        !message
    ) {

        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });

    }

    res.status(201).json({
        success: true,
        message: "Message received successfully"
    });









    
};

module.exports = {
    submitContact
};