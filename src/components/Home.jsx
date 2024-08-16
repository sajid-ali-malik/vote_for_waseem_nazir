import { Button, Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container className="container">
      <img
        src={"./assets/app-images/bottom.jpeg"}
        alt="azadi"
        className="azadi-image"
      />
      <Box>
        <img
          src={"/assets/app-images/WaseemNazir.jpeg"}
          alt="Top"
          className="top-image"
        />
      </Box>

      <Button
        variant="contained"
        onClick={() => navigate("/polling-station")}
        style={{
          marginBottom: "16px",
          width: "70%",
          backgroundColor: "#1f8c07",
          color: "#fff",
          padding: "10px",
          fontSize: "16px",
        }}
        className="button"
      >
        Locate Polling Station
      </Button>

      <Button
        variant="contained"
        onClick={() => navigate("/ballot-paper")}
        style={{
          marginBottom: "16px",
          width: "70%",
          backgroundColor: "#1f8c07",
          color: "#fff",
          padding: "10px",
          fontSize: "16px",
        }}
        className="button"
      >
        Our Panel
      </Button>

      <Button
        variant="contained"
        onClick={() => navigate("/contact")}
        style={{
          marginBottom: "16px",
          width: "70%",
          backgroundColor: "#1f8c07",
          color: "#fff",
          padding: "10px",
          fontSize: "16px",
        }}
        className="button"
      >
        For Help
      </Button>

      <img
        src={"./assets/app-images/note.png"}
        alt="note"
        className="note-image"
      />
    </Container>
  );
}
