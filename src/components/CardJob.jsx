import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchJobsStart,
  fetchJobsSuccess,
  fetchJobsFailure,
} from '../redux/features/searchSlice'
import { Card, Button } from 'react-bootstrap'

const CardJob = () => {
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
        console.log('Risposta dal server', data)
        dispatch(fetchJobsSuccess(data.data))
      })
      .catch((err) => {
        dispatch(fetchJobsFailure(err.message))
      })
  }, [query, dispatch])

  return (
    <>
      {loading && <p>Loading jobs...</p>}
      {error && <p>Error: {error}</p>}
      <div className="job-list">
        {jobs.map((job) => (
          <Card key={job._id} className="me-lg-4">
            <Card.Body>
              <Card.Title className=" text-primary">{job.title}</Card.Title>
              <Card.Subtitle className="mb-1">{job.company_name}</Card.Subtitle>
              <Card.Subtitle className=" text-muted">
                {job.candidate_required_location}
              </Card.Subtitle>
              <Card.Text className=" mb-0">Category: {job.category}</Card.Text>
              <Card.Text>{job.publication_date}</Card.Text>
              <Button variant="outline-primary" href={job.url} target="_blank">
                View
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  )
}

export default CardJob
