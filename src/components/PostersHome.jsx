import { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Spinner,
  Modal,
  Form,
  Alert,
} from "react-bootstrap";
import { BsHandThumbsUp } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { IoPaperPlaneSharp } from "react-icons/io5";
import { RiRepeat2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../redux/actions/commentsAction";
import { fetchPosts } from "../redux/actions/activitiesAction";

const PostersHome = () => {
  const [isLoading, setIsLoading] = useState(true); // Loading set to true initially
  const [showModal, setShowModal] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [newComment, setNewComment] = useState("");

  const comments = useSelector((state) => state.commentsReducer.comments);
  const posts = useSelector((state) => state.postsReducer.posts);
  const error = useSelector((state) => state.postsReducer.error);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // Set loading to true before fetching
        await dispatch(fetchPosts());
      } catch (err) {
        console.error("Errore durante il caricamento dei post:", err);
      } finally {
        setIsLoading(false); // Ensure loading is false after fetching
      }
    };

    fetchData();
  }, [dispatch]);

  const handleShowComments = (postId) => {
    setSelectedPostId(postId);
    setShowModal(true);
    dispatch(fetchComments(postId));
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPostId(null);
  };

  const handleAddComment = () => {
    console.log(
      `Aggiungi commento: "${newComment}" per il post ID: ${selectedPostId}`
    );
    setNewComment("");
    handleCloseModal();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${day}/${month}/${year} alle ${hours}:${minutes}`;
  };

  if (isLoading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" role="status">
          <span className="visually-hidden">Caricamento...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5">
        <Alert variant="danger">
          Errore durante il caricamento dei post: {error}
        </Alert>
      </div>
    );
  }

  return (
    <>
      {posts.map((post) => (
        <Card key={post._id} className="my-4">
          <Card.Header className="border-0 bg-white">
            <div className="d-flex align-items-start">
              <img
                src={post.user.image}
                width="65px"
                height="65px"
                style={{ objectFit: "fill" }}
                className="rounded-circle me-3"
              />
              <div>
                <h5 className="mb-0 mt-1">
                  {post.user.name + " " + post.user.surname}
                </h5>
                <p className="mb-0">
                  Pubblicato il {formatDate(post.createdAt)}
                </p>
              </div>
            </div>
          </Card.Header>
          <Card.Body className="d-flex justify-content-center flex-column">
            <Card.Text>{post.text}</Card.Text>
            {post.image && (
              <img src={post.image} alt="Post Image" className="img-fluid" />
            )}
          </Card.Body>
          <Card.Footer className="bg-white d-flex justify-content-center">
            <Row className="m-0 p-0">
              <Col className="d-flex flex-nowrap">
                <Button
                  variant="outline-light"
                  className="d-flex align-items-center border-0 text-dark me-2"
                >
                  <BsHandThumbsUp className="me-1" />
                  Consiglia
                </Button>
                <Button
                  variant="outline-light"
                  className="d-flex align-items-center border-0 text-dark me-2"
                  onClick={() => handleShowComments(post._id)}
                >
                  <FaRegCommentDots className="me-1" />
                  Commenta
                </Button>
                <Button
                  variant="outline-light"
                  className="d-flex align-items-center border-0 text-dark me-2"
                >
                  <RiRepeat2Line className="me-1" />
                  Diffondi
                </Button>
                <Button
                  variant="outline-light"
                  className="d-flex align-items-center border-0 text-dark"
                >
                  <IoPaperPlaneSharp className="me-1" />
                  Invia
                </Button>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      ))}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Commenti</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {comments
            .filter((comment) => comment.postId === selectedPostId)
            .map((comment) => (
              <Card key={comment._id} className="mb-2">
                <Card.Body>
                  <Card.Text>{comment.text}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          <Form>
            <Form.Group controlId="formComment">
              <Form.Label>Aggiungi un commento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Scrivi un commento..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Chiudi
          </Button>
          <Button variant="primary" onClick={handleAddComment}>
            Aggiungi Commento
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PostersHome;
