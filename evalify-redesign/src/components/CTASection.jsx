
import { Box, Button, Container, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function CTASection() {
  const chartValues = [25, 42, 32, 55, 38, 48, 65, 45, 58, 75, 52, 68];

  return (
    <Box
      id="get-started"
      component="section"
      sx={{
        py: { xs: 3, md: 4 },
        background: (theme) => theme.gradients.hero,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            minHeight: { xs: 300, md: 220 },
            borderRadius: "22px",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 0.9fr" },
            alignItems: "center",
            background: (theme) => theme.gradients.cta,
            border: "1px solid",
            borderColor: "divider",
            px: { xs: 3, md: 5 },
            py: { xs: 4, md: 3 },
          }}
        >
          {/* Decorative background shape */}
          <Box
            sx={{
              position: "absolute",
              width: 240,
              height: 240,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, #E4CFFF 0%, transparent 70%)",
              right: "30%",
              top: -90,
              pointerEvents: "none",
            }}
          />

          {/* CTA content */}
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.8rem" },
              }}
            >
              Stop scheduling.
              <br />
              <Box
                component="span"
                sx={{
                  background: (theme) => theme.gradients.tealBlue,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Start hiring.
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mt: 1.5,
                maxWidth: 430,
                color: "text.secondary",
                fontSize: "0.9rem",
                lineHeight: 1.7,
              }}
            >
              Join thousands of teams already using Evalify to find and hire
              top talent.
            </Typography>

            {/* CTA buttons */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1.5,
                mt: 2,
              }}
            >
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  backgroundColor: "primary.main",
                  color: "primary.contrastText",
                  borderRadius: "30px",
                  px: 2.5,
                  py: 1.1,
                  fontSize: "0.75rem",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                  },
                }}
              >
                Start free trial
              </Button>

              <Button
                variant="outlined"
                startIcon={<PlayArrowIcon />}
                sx={{
                  color: "primary.main",
                  backgroundColor: "background.paper",
                  borderColor: "divider",
                  borderRadius: "30px",
                  px: 2.2,
                  py: 1.1,
                  fontSize: "0.75rem",
                  "&:hover": {
                    backgroundColor: "action.hover",
                    borderColor: "divider",
                  },
                }}
              >
                Watch demo
              </Button>
            </Box>
          </Box>

          {/* Dashboard preview */}
          <Box
            sx={{
              position: "relative",
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              minHeight: 190,
            }}
          >
            {/* Blurred background */}
            <Box
              sx={{
                position: "absolute",
                width: 250,
                height: 200,
                borderRadius: "45%",
                background:
                  "linear-gradient(135deg, #F3D8FF, #FFDDB7, #BFD7FF)",
                filter: "blur(18px)",
                opacity: 0.8,
              }}
            />

            {/* Dashboard card */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 380,
                p: 2,
                borderRadius: "18px",
                backgroundColor: "rgba(255, 255, 255, 0.72)",
                border: "1px solid rgba(255, 255, 255, 0.9)",
                boxShadow: (theme) => theme.customShadows.floating,
                transform: "rotate(-5deg)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography
                  sx={{ fontSize: "0.8rem", fontWeight: 800 }}
                >
                  Hiring overview
                </Typography>

                <Typography
                  sx={{
                    color: "success.main",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                  }}
                >
                  ● Live
                </Typography>
              </Box>

              {/* Metrics */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 1.5,
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: "12px",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.65rem",
                    }}
                  >
                    Candidates
                  </Typography>

                  <Typography
                    sx={{ fontSize: "1.35rem", fontWeight: 800 }}
                  >
                    248
                  </Typography>
                </Box>

                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: "12px",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.65rem",
                    }}
                  >
                    Interviews
                  </Typography>

                  <Typography
                    sx={{ fontSize: "1.35rem", fontWeight: 800 }}
                  >
                    86
                  </Typography>
                </Box>
              </Box>

              {/* Decorative chart bars */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: 0.7,
                  height: 65,
                  px: 0.5,
                }}
              >
                {chartValues.map((value, index) => (
                  <Box
                    key={index}
                    sx={{
                      flex: 1,
                      height: `${value}%`,
                      minWidth: 0,
                      borderRadius: "4px 4px 0 0",
                      background: (theme) => theme.gradients.tealBlue,
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default CTASection;
