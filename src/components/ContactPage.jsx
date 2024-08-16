const ContactPage = () => {
  const openFormInBrowser = () => {
    window.open(
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLScrxuEdf0JAPZwyCdKE-5OXKtQZM50hiy-UdupO5O6pYPQLjg/formResponse",
      "_blank"
    );
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.contactText}>Contact Us</h1>
      <h2 style={styles.nameText}>Engr. Mudassir Hussain Jutt</h2>
      <p style={styles.phoneText}>
        03038068574 <br />
        03399101600
      </p>
      <h1 style={styles.contactTextOr}>Or</h1>
      <button style={styles.button} onClick={openFormInBrowser}>
        Click Here
      </button>
      <h2 style={styles.nameText}>& we will contact you</h2>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#D3D3D3",
    height: "100vh",
    textAlign: "center",
  },
  contactText: {
    fontSize: "35px",
    marginBottom: "10px",
    color: "#fff",
    backgroundColor: "#1f8c07",
    borderRadius: "9px",
    padding: "10px",
  },
  contactTextOr: {
    fontSize: "35px",
    marginBottom: "10px",
    color: "#fff",
    backgroundColor: "blue",
    borderRadius: "9px",
    padding: "10px",
  },
  nameText: {
    fontSize: "22px",
    marginBottom: "5px",
  },
  phoneText: {
    fontSize: "22px",
    marginBottom: "20px",
  },
  button: {
    fontSize: "18px",
    padding: "10px 20px",
    backgroundColor: "#1f8c07",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ContactPage;
