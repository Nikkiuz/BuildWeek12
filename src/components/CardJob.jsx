import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchJobsStart,
  fetchJobsSuccess,
  fetchJobsFailure,
} from '../redux/reducers/searchReducer'
import { Card, Button } from 'react-bootstrap'

const CardJob = () => {
  const dispatch = useDispatch()
  const query = useSelector((state) => state.searchReducer.query)
  const jobs = useSelector((state) => state.searchReducer.jobs)
  const loading = useSelector((state) => state.searchReducer.loading)
  const error = useSelector((state) => state.searchReducer.error)

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
        {jobs.slice(-10).map((job) => (
          <Card key={job._id} className="me-lg-4">
            <Card.Body>
              <Card.Title className=" text-primary">{job.title}</Card.Title>
              <Card.Subtitle className="mb-1">{job.company_name}</Card.Subtitle>
              <Card.Subtitle className=" text-muted">
                {job.candidate_required_location}
              </Card.Subtitle>
              <Card.Text className=" mb-0">Category: {job.category}</Card.Text>
              <Card.Text>{job.publication_date}</Card.Text>
            </Card.Body>
            <Card.Footer className=" d-flex justify-content-end bg-white border-0">
              <Button variant="outline-primary" href={job.url} target="_blank">
                View
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </>
  )
}

export default CardJob
