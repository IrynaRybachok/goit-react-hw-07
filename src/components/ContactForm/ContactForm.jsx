import s from "./ContactForm.module.css";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const nameFildId = useId();
  const numberFildId = useId();
  const initialValues = {
    name: "",
    number: "",
  };

  const contactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format")
      .required("Required"),
  });

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactFormSchema}
    >
      <Form className={s.form}>
        <div className={s.wrapInput}>
          <label className={s.formLabel} htmlFor={nameFildId}>
            Name
          </label>
          <Field
            className={s.formInput}
            type="text"
            name="name"
            id={nameFildId}
            placeholder="Name"
          />
          <ErrorMessage
            className={s.formInputError}
            name="name"
            component="span"
          />
        </div>
        <div className={s.wrapInput}>
          <label className={s.formLabel} htmlFor={numberFildId}>
            Number
          </label>
          <Field
            className={s.formInput}
            type="tel"
            name="number"
            placeholder="xxx-xx-xx"
          />
          <ErrorMessage
            className={s.formInputError}
            name="number"
            component="span"
          />
        </div>
        <button className={s.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
