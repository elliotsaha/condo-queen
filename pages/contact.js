import React, { useState } from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Error from "@material-ui/icons/Error";
import styles from "../styles/contact.module.css";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert, AlertTitle } from "@material-ui/lab";
import axios from "axios";

export default function PanelFour() {
  // States for form fields and error handling
  const [name, setName] = useState("");
  const [isNameError, setIsNameError] = useState(false);
  const [nameError, setNameError] = useState("");

  const [email, setEmail] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [emailError, setEmailError] = useState("");

  const [paragraph, setParagraph] = useState("");
  const [isParagraphError, setIsParagraphError] = useState(false);
  const [paragraphError, setParagraphError] = useState("");

  // Success Snackbar
  const [successOpen, setSuccessOpen] = useState(false);

  const handleSuccessClick = () => {
    setSuccessOpen(true);
  };

  const handleSuccessClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSuccessOpen(false);
  };

  // Setting the form field to state
  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onParagraphChange = (event) => {
    setParagraph(event.target.value);
  };
  const sendMail = ({name, email, paragraph}) => {
    axios.post("/api/sendmail", {
        name: name,
        email: email,
        paragraph: paragraph
    })
  }
  // On submit function function for error handling
  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      e.preventDefault();
      setIsNameError(true);
      setNameError(
        <div>
          <Error className={styles.error} />
          <span>Required Field</span>
        </div>
      );
    }
    // Regex expression to know if email is invalid
    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      ) !== true
    ) {
      e.preventDefault();
      setIsEmailError(true);
      setEmailError(
        <div>
          <Error className={styles.error} />
          <span>Invalid Email</span>
        </div>
      );
    }
    if (paragraph === "") {
      e.preventDefault();
      setIsParagraphError(true);
      setParagraphError(
        <div>
          <Error className={styles.error} />
          <span>Required Field</span>
        </div>
      );
    }
    if (name !== "" &&  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      ) === true && paragraph !== "") {
      e.preventDefault();
      setParagraph("");
      setEmail("");
      setName("");
      setIsEmailError(false)
      setIsNameError(false)
      setIsParagraphError(false)
      sendMail({name, email, paragraph})
      handleSuccessClick();
    }
  };

  return (
    <div className={styles.root}>
      <Snackbar
        open={successOpen}
        autoHideDuration={6000}
        onClose={handleSuccessClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity="success" onClose={handleSuccessClose}>
          <AlertTitle>Success</AlertTitle>
           Thank You For Deciding to Contact Condo Queen
        </Alert>
      </Snackbar>
      <div className={styles.imageOuter}>
        <img
          src="/Homepage/cityTowers.png"
          className={styles.image}
          loading="eager"
          alt="Contact"
        />
      </div>
      <div className={styles.text}>
        <div className={styles.title}>Contact Us </div>
        <div className={styles.formContainer}>
          <form name="contact" method="post">
            {/*Text field for Name*/}
            <TextField
              InputProps={{
                style: {
                  fontFamily: "Roboto Slab, sans-serif",
                  fontWeight: "bold",
                  color: "#CEB095",
                },
              }}
              FormHelperTextProps={{
                className: styles.helperText,
              }}
              className={isNameError ? styles.textFieldError : styles.textField}
              name="Name"
              label="Name"
              value={name}
              onChange={onNameChange}
              helperText={nameError}
              error={isNameError}
              variant="outlined"
              color="secondary"
            />
            {/*Text field for Email*/}
            <TextField
              InputProps={{
                style: {
                  fontFamily: "Roboto Slab, sans-serif",
                  fontWeight: "bold",
                  color: "#CEB095",
                },
              }}
              FormHelperTextProps={{
                className: styles.helperText,
              }}
              className={
                isEmailError ? styles.textFieldError : styles.textField
              }
              name="Email"
              label="Email"
              value={email}
              onChange={onEmailChange}
              helperText={emailError}
              error={isEmailError}
              variant="outlined"
            />
            {/*Text field for Message*/}
            <TextField
              InputProps={{
                style: {
                  fontFamily: "Roboto Slab, sans-serif",
                  fontWeight: "bold",
                  color: "#CEB095",
                },
              }}
              FormHelperTextProps={{
                className: styles.helperText,
              }}
              multiline
              rows={8}
              className={
                isParagraphError ? styles.textFieldError : styles.textField
              }
              name="Message"
              label="Message"
              value={paragraph}
              onChange={onParagraphChange}
              helperText={paragraphError}
              error={isParagraphError}
              variant="outlined"
            />
            <div>
              {/*Submit Button*/}
              <Button
                type="submit"
                className={styles.moreCaseStudiesButton}
                onClick={onSubmit}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
