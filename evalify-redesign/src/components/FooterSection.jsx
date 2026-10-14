import { Box, Container, Stack, Typography, IconButton } from "@mui/material";
import BrandLogo from "./common/BrandLogo";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";

function FooterSection() {
  const columns = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Integrations", href: "#features" },
        { label: "Security", href: "#faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Blog", href: "#blog" },
        { label: "Careers", href: "#careers" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Help center", href: "#help" },
        { label: "Documentation", href: "#documentation" },
        { label: "Guides", href: "#guides" },
        { label: "Status", href: "#status" },
      ],
    },
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      Icon: LinkedInIcon,
      href: "https://www.linkedin.com",
    },
    {
      label: "X",
      Icon: XIcon,
      href: "https://x.com",
    },
    {
      label: "GitHub",
      Icon: GitHubIcon,
      href: "https://github.com",
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: (theme) => theme.gradients.hero,
        py: { xs: 5, md: 7 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr 1fr",
              md: "1.4fr 1fr 1fr 1fr",
            },
            columnGap: { xs: 3, md: 6 },
            rowGap: 4,
          }}
        >
          {/* Brand */}
          <Box>
            {/* Brand */}
<Box sx={{ mb: 1.5 }}>
  <BrandLogo />
</Box>

            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontSize: "0.75rem",
                maxWidth: 200,
              }}
            >
              AI-powered interviews for modern hiring teams.
            </Typography>

            {/* Social links */}
            <Stack direction="row" spacing={1} sx={{ mt: 1.5 }}>
              {socialLinks.map(({ label, Icon, href }) => (
                <IconButton
                  key={label}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  size="small"
                  sx={{
                    width: 27,
                    height: 27,
                    color: "text.secondary",
                    backgroundColor: "action.hover",
                    border: 1,
                    borderColor: "divider",
                    "&:hover": {
                      color: "primary.main",
                      backgroundColor: "action.selected",
                    },
                  }}
                >
                  <Icon sx={{ fontSize: 15 }} />
                </IconButton>
              ))}
            </Stack>
          </Box>

          {/* Navigation columns */}
          {columns.map((column) => (
            <Box key={column.title}>
              <Typography
                component="h3"
                variant="h3"
                sx={{
                  color: "text.primary",
                  fontSize: "0.8rem",
                  mb: 1.5,
                }}
              >
                {column.title}
              </Typography>

              <Stack spacing={0.8}>
                {column.links.map((link) => (
                  <Typography
                    key={link.label}
                    component="a"
                    variant="body2"
                    href={link.href}
                    sx={{
                      width: "fit-content",
                      color: "text.secondary",
                      fontSize: "0.75rem",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Stack>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default FooterSection;
