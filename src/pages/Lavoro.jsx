import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchJobsStart,
  fetchJobsSuccess,
  fetchJobsFailure,
} from '../redux/features/searchSlice'
import { Container, Card, Button } from 'react-bootstrap'

const Lavoro = () => {
  const dispatch = useDispatch()
  const { query, jobs, loading, error } = useSelector((state) => state.search)

  useEffect(() => {
    dispatch(fetchJobsStart())
    fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('Failed to fetch jobs')
      })
      .then((data) => {
        dispatch(fetchJobsSuccess(data.data)) // Salva i risultati dei lavori nel redux
      })
      .catch((err) => {
        dispatch(fetchJobsFailure(err.message))
      })
  }, [query, dispatch]) // Esegue ogni volta che la query cambia

  return (
    <Container className="py-4">
      {loading && <p>Loading jobs...</p>}
      {error && <p>Error: {error}</p>}
      <div className="job-list">
        {jobs.map((job) => (
          <Card key={job._id} className="mb-3">
            <Card.Body>
              <Card.Title>{job.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {job.company_name}
              </Card.Subtitle>
              <Card.Text>{job.category}</Card.Text>
              <Button variant="outline-primary" href={job.url} target="_blank">
                View Job
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  )
}

export default Lavoro
