import {
  AppBar,
  Box,
  Container,
  Toolbar,
  MenuItem,
  Typography,
} from '@mui/material'
import GroupIcon from '@mui/icons-material/Group'

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundImage:
            'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <MenuItem sx={{ display: 'flex', gap: 2 }}>
                <GroupIcon fontSize="large" />
                <Typography variant="h4" fontWeight="bold"></Typography>
              </MenuItem>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Navbar
