import Contact from "../../models/contact.js";

const add = async (req, res) => {
    const result = await Contact.create(req.body);
    return res.status(201).json(result)
}

export default add;