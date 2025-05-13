import { Box, Container, CssBaseline } from '@mui/material'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'
import Navbar from './Navbar'

function App() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined)

  useEffect(() => {
    axios
      .get<Activity[]>('/api/activities')
      .then((response) => {
        setActivities(response.data)
        setIsLoading(false)
      })
      .catch((err) => {
        setError('Failed to fetch activities: ' + err.message)
        setIsLoading(false)
      })

    // Fetch returns a javascript promise
    // fetch('https://localhost:5001/api/activities')
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok')
    //     }
    //     return response.json()
    //   })
    //   .then((data) => {
    //     setActivities(data)
    //     setIsLoading(false)
    //   })
    //   .catch((error) => {
    //     setError('Failed to fetch activities: ' + error.message)
    //     setIsLoading(false)
    //   })
  }, [])

  const handleSelectActivity = (id:string) => {
    setSelectedActivity(activities.find((a) => a.id === id))
  }

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined)
  }
  return (
    <Box sx={{ bgcolor: '#eeeeee' }}>
      <CssBaseline />
      <Navbar />
      <Typography variant="h3">Reactivities</Typography>

      {isLoading && <Typography>Loading activities...</Typography>}

      {error && <Typography color="error">{error}</Typography>}

      {!isLoading && !error && (
        <Container maxWidth="xl" sx={{ mt: 3 }}>
          <ActivityDashboard activities={activities} 
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}/>
        </Container>
      )}
    </Box>
  )
}

export default App
