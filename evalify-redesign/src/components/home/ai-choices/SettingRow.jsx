import { Stack, Switch, Typography } from "@mui/material";

function SettingRow({ label }) {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
        >
            <Typography
                sx={{
                    fontSize: "0.72rem",
                    color: "#55516A",
                }}
            >
                {label}
            </Typography>

            <Switch
                defaultChecked
                size="small"
                sx={{
                    "& .MuiSwitch-switchBase.Mui-checked": {
                        color: "primary.main",
                    },

                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                        backgroundColor: "primary.main",
                    },
                }}
            />
        </Stack>
    );
}

export default SettingRow;