import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./Writer.css";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import deleteIcon from "../images/deleteIcon.png";
import bloggingpana from "../images/bloggingpana.png";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import dateFormat from "dateformat";

function Writer() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    Axios.get(`${import.meta.env.FRONTEND_URL}/articles`)
      .then((res) => {
        setArticles(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  });
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const onContentChange = (event) => {
    setContent(event.target.value);
  };

  const onCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleDelete = (id) => {
    Axios.delete(`${import.meta.env.FRONTEND_URL}/articles/delete/${id}`)
      .then(() => {
        alert("Article Deleted");
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const addNewArticle = (event) => {
    event.preventDefault();

    Axios.post(`${import.meta.env.FRONTEND_URL}/articles/add`, {
      title: title,
      author: author,
      content: content,
      category: category,
    })
      .then(() => {
        alert("Article Posted Successfully!!!");
      })
      .catch((e) => {
        console.log(e.message);
      });
    setTitle("");
    setAuthor("");
    setContent("");
    setCategory("");
    navigate("/");
  };

  return (
    <Container fluid className="writerContainer">
      <Container>
        <Row>
          <Col className="writerInputContainer mt-4 mb-4" sm={12} md={6} lg={5}>
            <h1 className="inputCardHeading">Add New Article</h1>
            <Form onSubmit={addNewArticle} className="formStyle">
              <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  className="inputStyle"
                  type="text"
                  placeholder="Enter Title Here"
                  onChange={onTitleChange}
                  value={title}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  className="inputStyle"
                  type="text"
                  placeholder="Enter Author Name"
                  onChange={onAuthorChange}
                  value={author}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicContent">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  className="inputStyle"
                  placeholder="Enter Article Content"
                  onChange={onContentChange}
                  value={content}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  className="inputStyle"
                  type="text"
                  placeholder="Enter Category Here"
                  onChange={onCategoryChange}
                  value={category}
                />
              </Form.Group>
              <Button className="btn addArticleBtn" type="submit">
                Add Article
              </Button>
            </Form>
          </Col>
          <Col className="articleInfoContainer" sm={12} md={12} lg={6}>
            <h1 className="tableHeading">Add Information</h1>
            <Table striped bordered hover className="tableStyle">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {articles.length > 0 &&
                  articles.map((eachArticle) => (
                    <tr key={eachArticle._id}>
                      <td>{eachArticle.title}</td>
                      <td>{eachArticle.author}</td>
                      <td>
                        {dateFormat(eachArticle.createdAt, "mmmm dS, yyyy")}
                      </td>
                      <td>
                        <button className="btn">
                          <img
                            className="deleteicon"
                            src={deleteIcon}
                            alt="deleteicon"
                            onClick={() => handleDelete(eachArticle._id)}
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
            {!articles.length > 0 && (
              <div className="noArticleInfoContainer">
                <img
                  className="noArticleFound"
                  src={bloggingpana}
                  alt="no article"
                />
                <h1 className="noArticleInfoText">No Article Info</h1>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Writer;
