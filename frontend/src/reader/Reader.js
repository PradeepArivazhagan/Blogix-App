import React, { useEffect, useState } from "react";
import "./Reader.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import Axios from "axios";
import search from "../images/search.png";
import arrow from "../images/arrow.png";
import bloggingbro from "../images/bloggingbro.png";
import dateFormat from "dateformat";
import { useNavigate } from "react-router-dom";

const Reader = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [searchInput, setSearchInput] = useState([]);
  useEffect(() => {
    Axios.get(`${import.meta.env.FRONTEND_URL}/articles`)
      .then((res) => {
        setArticles(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  });

  const onSearchChange = (event) => {
    const searchInputValue = event.target.value;
    setSearchInput(searchInputValue);
    const searchResult = articles.filter((eachArticle) =>
      eachArticle.title.toLowerCase().includes(searchInputValue.toLowerCase())
    );
    setArticles(searchResult);
  };

  const readMoreHandler = (id) => {
    const findArticle = articles.find((eachArticle) => {
      return eachArticle._id === id;
    });
    navigate("/view", {
      state: {
        title: findArticle.title,
        author: findArticle.author,
        content: findArticle.content,
        category: findArticle.category,
        createdAt: findArticle.createdAt,
      },
    });
  };

  return (
    <Container fluid className="readerContainer">
      <Container>
        <Row>
          <Col className="searchInputContainer mt-4 mb-4" sm={12} md={6}>
            <input
              type="search"
              className="searchInputStyle"
              placeholder="Search With Title..."
              onChange={onSearchChange}
              value={searchInput}
            />
            <img className="searchIconStyle" src={search} alt="searchIcon" />
          </Col>
          <ul className="articleList">
            {articles.length > 0 &&
              articles.map((eachArticle) => (
                <Col
                  key={eachArticle._id}
                  className="articleCard"
                  sm={12}
                  md={6}
                  lg={4}
                >
                  <div className="category">{eachArticle.category}</div>
                  <div className="titleAndContentContainer">
                    <h1 className="articleTitle">{eachArticle.title}</h1>
                    <p className="articleContent">{eachArticle.content}</p>
                  </div>
                  <div className="authorAndReadMoreContainer">
                    <div>
                      <h1 className="authorName">{`Author: ${eachArticle.author}`}</h1>
                      <p className="createdDate">
                        {dateFormat(
                          eachArticle.createdAt,
                          "dddd, mmmm dS, yyyy"
                        )}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="readmore"
                      onClick={() => {
                        readMoreHandler(eachArticle._id);
                      }}
                    >
                      Read more{" "}
                      <img
                        className="arrowIconStyle"
                        src={arrow}
                        alt="arrowicon"
                      />
                    </button>
                  </div>
                </Col>
              ))}
            {!articles.length > 0 && (
              <Col className="articleNotFoundContainer">
                <img
                  className="noArticleImage"
                  src={bloggingbro}
                  alt="no article"
                />
                <h1 className="noArticleText">No Article</h1>
              </Col>
            )}
          </ul>
        </Row>
      </Container>
    </Container>
  );
};

export default Reader;
