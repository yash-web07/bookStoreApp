import { Contact } from "../model/contact.model.js";

// Contact Details save in Database
export const contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create a new contact entry
    const createUser = new Contact({
      name,
      email,
      message, // fixed typo
    });

    await createUser.save(); // await the save operation

    res.status(200).json({ message: "Your details have been sent." });
  } catch (error) {
    console.error("Error saving contact:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
