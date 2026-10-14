import { Box, Container, Typography } from "@mui/material";

import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

import SectionLabel from "./common/SectionLabel";

function FeaturesSection() {
  const features = [
    {
      title: "AI question generation",
      description:
        "Role-specific, skill-based questions powered by AI.",
      Icon: AutoAwesomeOutlinedIcon,
      color: "accent.green",
      background: "#DDF8EB",
    },
    {
      title: "Video interviews",
      description:
        "Candidates can record from anywhere, anytime.",
      Icon: VideocamOutlinedIcon,
      color: "accent.purple",
      background: "#F0E5FF",
    },
    {
      title: "Smart scoring",
      description:
        "Get instant, objective evaluations with detailed feedback.",
      Icon: HubOutlinedIcon,
      color: "accent.blue",
      background: "#E0EEFF",
    },
    {
      title: "ATS integration",
      description:
        "Sync with your existing workflow effortlessly.",
      Icon: SyncAltOutlinedIcon,
      color: "accent.orange",
      background: "#FFF0D2",
    },
    {
      title: "Live coding rounds",
      description:
        "Built-in code editor with multiple languages.",
      Icon: CodeOutlinedIcon,
      color: "accent.pink",
      background: "#FFE4EB",
    },
    {
      title: "SOC 2 ready",
      description:
        "Your data is secure and compliant.",
      Icon: SecurityOutlinedIcon,
      color: "accent.purple",
      background: "#E8E7FF",
    },
  ];

  return (
    <Box
      id="features"
      component="section"
      sx={{
        background: (theme) => theme.gradients.hero,
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        {/* Section heading */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            mb: { xs: 4, md: 5 },
          }}
        >
          <SectionLabel>Everything you need</SectionLabel>

          <Typography
            component="h2"
            variant="h2"
            sx={{
              color: "text.primary",
              fontSize: { xs: "2rem", md: "2.65rem" },
            }}
          >
            Built for modern hiring{" "}
            <Box
              component="span"
              sx={{
                background: (theme) => theme.gradients.PurpleBlue,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              teams.
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: "0.9rem",
              maxWidth: 600,
              mt: 1.5,
            }}
          >
            From AI interviews to detailed analytics, Evalify gives you
            all the tools to streamline your hiring process.
          </Typography>
        </Box>

        {/* Feature cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(3, minmax(0, 1fr))",
            },
            gap: { xs: 2, md: 2.5 },
          }}
        >
          {features.map(
            ({ title, description, Icon, color, background }) => (
              <Box
                key={title}
                sx={{
                  backgroundColor: "background.paper",
                  border: 1,
                  borderColor: "divider",
                  borderRadius: "14px",
                  p: { xs: 2.5, md: 3 },
                  minHeight: { xs: 175, md: 165 },
                  boxShadow: (theme) => theme.customShadows.card,
                  transition: "transform 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                  },
                }}
              >
                {/* Feature icon */}
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "25%",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: background,
                    color,
                    mb: 1.5,
                  }}
                >
                  <Icon sx={{ fontSize: 23 }} />
                </Box>

                {/* Feature title */}
                <Typography
                  component="h3"
                  variant="h3"
                  sx={{
                    color: "text.primary",
                    fontSize: "1rem",
                  }}
                >
                  {title}
                </Typography>

                {/* Feature description */}
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.8rem",
                    mt: 0.6,
                    maxWidth: 300,
                  }}
                >
                  {description}
                </Typography>
              </Box>
            )
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default FeaturesSection;
