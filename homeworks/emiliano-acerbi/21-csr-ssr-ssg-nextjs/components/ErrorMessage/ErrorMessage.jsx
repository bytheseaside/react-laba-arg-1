import Container from '../Container';

function ErrorMessage() {
  return (
    <Container>
      <h1 className="error-title">There was a problem fetching the users, try again later.</h1>
    </Container>
  );
}

export default ErrorMessage;
