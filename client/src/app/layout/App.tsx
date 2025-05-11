import { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import { CssBaseline, List, ListItem, ListItemText } from '@mui/material'
import axios from 'axios'
import Navbar from './Navbar'

function App() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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

  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Typography variant="h3">Reactivities</Typography>

      {isLoading && <Typography>Loading activities...</Typography>}

      {error && <Typography color="error">{error}</Typography>}

      {!isLoading && !error && (
        <List>
          {activities.map((activity) => (
            <ListItem key={activity.id}>
              <ListItemText>{activity.title}</ListItemText>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  )
}

export default App
