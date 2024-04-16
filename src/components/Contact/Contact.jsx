import css from "./Contact.module.css";
import { FaPeopleArrows } from "react-icons/fa6";
import { FaPhoneSquare } from "react-icons/fa";

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className={css.contactItem}>
      <h2>
        <FaPeopleArrows /> {contact.name}
      </h2>
      <p>
        <FaPhoneSquare /> {contact.number}
      </p>
      <button
        type="button"
        onClick={() => onDeleteContact(contact.id)}
        className={css.delBtn}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
