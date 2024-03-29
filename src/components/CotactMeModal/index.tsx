import React, { useState } from "react";
import Modal from "../Modal";
import contactLottie from "../../assets/contact.json";
import {
  Field,
  FieldProps,
  Form,
  Formik,
  FormikHelpers,
  FormikProps,
} from "formik";
import Button from "../Button";
import { send } from "@emailjs/browser";
import loadingLottie from "../../assets/loading.json";
import sentLottie from "../../assets/sent.json";
import failedLottie from "../../assets/failed.json";
import * as Yup from "yup";
import _ from "lodash";
import { IoCloseCircleOutline } from "react-icons/io5";
import OptimizedLottie from "../OptimizedLottie";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const contactMeValidation = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string()
    .min(3, "Subject must be at least 3 characters")
    .required("Subject is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

const Textarea: React.ComponentType<FieldProps> = ({
  field,
  form,
  ...props
}) => {
  return <textarea {...field} {...props} />;
};

const renderForm = ({ errors, isValid }: FormikProps<FormValues>) => {
  return (
    <Form className="contact-form">
      <Field
        name="name"
        type="text"
        className="contact-form-input"
        placeholder="Name"
        required
      />

      <Field
        type="email"
        name="email"
        className="contact-form-input"
        placeholder="Email"
        required
      />

      <Field
        type="text"
        name="subject"
        className="contact-form-input"
        placeholder="Subject"
        required
      />

      <Field
        component={Textarea}
        type="textarea"
        name="message"
        className="contact-form-input"
        placeholder="Message"
        required
      />

      <div className="contact-form-button-container">
        <Button
          className={!isValid ? "button-danger" : ""}
          disabled={!isValid}
          type="submit"
          title="send"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-send"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          }
        />
      </div>

      {
        <div className="contact-form-error">
          {errors.name && <p>{_.get(errors, "name", "")}</p>}
          {errors.email && <p>{_.get(errors, "email", "")}</p>}
          {errors.subject && <p>{_.get(errors, "subject", "")}</p>}
          {errors.message && <p>{_.get(errors, "message", "")}</p>}
        </div>
      }
    </Form>
  );
};
const ContactMeModal = ({ isOpen, onClose }: Props) => {
  const emailTemplateId = process.env.GATSBY_EMAIL_TEMPLATE_ID || "";
  const emailPublicKey = process.env.GATSBY_EMAIL_PUBLIC_KEY || "";
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  const defaultValues: FormValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleSubmit: (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => Promise<void> = async (values, actions) => {
    setIsLoading(true);
    try {
      await send("Gmail", emailTemplateId, values, emailPublicKey);
      await actions.setSubmitting(false);
      await actions.resetForm();
      await setIsLoading(false);
      await setIsSent(true);
    } catch (err) {
      console.log(err);
      await actions.setSubmitting(false);
      await actions.resetForm();
      await setIsLoading(false);
      await setIsFailed(true);
    }
  };
  const handleClose = () => {
    setIsSent(false);
    onClose();
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="close-contact-modal" onClick={onClose}>
          <IoCloseCircleOutline color={"#e4343e"} />
        </div>
        <div className="content-container">
          <OptimizedLottie
            autoPlay={isOpen}
            className="contact-lottie"
            animationData={contactLottie}
            loop={true}
          />
          {isLoading || isSent || isFailed ? (
            <div className="contact-status">
              <div className="contact-status-lottie">
                {isLoading ? (
                  <OptimizedLottie
                    className="contact-lottie"
                    animationData={loadingLottie}
                    loop={true}
                  />
                ) : isSent ? (
                  <OptimizedLottie
                    className="contact-lottie"
                    animationData={sentLottie}
                    loop={false}
                    onComplete={handleClose}
                  />
                ) : (
                  <OptimizedLottie
                    className="contact-lottie"
                    animationData={failedLottie}
                    loop={false}
                    onComplete={() => setIsFailed(false)}
                  />
                )}
              </div>

              {isSent ? (
                <div className="contact-message">
                  <h1>Thank you for your message!</h1>
                  <p>We will get back to you as soon as possible.</p>
                </div>
              ) : isFailed ? (
                <div className="contact-message">
                  <h1>Something went wrong!</h1>
                  <p>Please try again later.</p>
                </div>
              ) : (
                <div className="contact-message">
                  <h1>Loading</h1>
                </div>
              )}
            </div>
          ) : null}
          <div className="contact-form-container">
            <h1 className="contact-title">Write a message</h1>
            {/* form */}
            <Formik
              initialValues={defaultValues}
              onSubmit={handleSubmit}
              validationSchema={contactMeValidation}
            >
              {renderForm}
            </Formik>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ContactMeModal;
