const messages = [];

const submitContact = (req, res) => {

    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }



    const newMessage = {
        id: Date.now(),
        name,
        email,
        subject,
        message
    };



    
    messages.push(newMessage);

    res.status(201).json({
        success: true,
        message: "Message received successfully",
        data: newMessage
    });
};

const getMessages = (req, res) => {
    res.status(200).json(messages);
};

module.exports = {
    submitContact,
    getMessages
};