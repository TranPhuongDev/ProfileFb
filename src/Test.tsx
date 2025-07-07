import { Container, Grid, Paper, Typography } from "@mui/material";
import "./App.css";

function TestApp() {
  return (
    <Container sx={{ bgcolor: "#f0f0f0", padding: "20px" }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Paper
            sx={{
              p: 2,
              textAlign: "center",
              height: "100px",
              bgcolor: "#ffdddd",
            }}
          >
            <Typography variant="h6">Item A</Typography>
          </Paper>
        </Grid>
        {/* Item B */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Paper
            sx={{
              p: 2,
              textAlign: "center",
              height: "100px",
              bgcolor: "#ddffdd",
            }}
          >
            <Typography variant="h6">Item B</Typography>
          </Paper>
        </Grid>
        {/* Item C */}
        <Grid size={{ xs: 12, sm: 12, md: 4 }}>
          <Paper
            sx={{
              p: 2,
              textAlign: "center",
              height: "100px",
              bgcolor: "#ddddff",
            }}
          >
            <Typography variant="h6">Item C</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
export default TestApp;
