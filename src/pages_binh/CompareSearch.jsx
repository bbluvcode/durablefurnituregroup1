import { useState } from "react";
import { Modal, Button, Form, ListGroup, Alert } from "react-bootstrap";
import axios from "axios";

const CompareSearch = ({ show, handleClose, handleProductSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchError, setSearchError] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://653f52049e8bd3be29e0427e.mockapi.io/products?search=${searchTerm}`
      );
      if (response.data.length > 0) {
        setSearchResults(response.data);
        setSearchError("");
      } else {
        setSearchResults([]);
        setSearchError("No results found.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setSearchError("Error fetching data. Please try again later.");
    }
  };

  const handleProductClick = (product) => {
    handleProductSelect(product);
    handleClose(); // Đóng sau khi chọn sản phẩm
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Modal show={show} onHide={handleClose} ackdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>What are you looking for?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="searchForm">
          {/* <Form.Label>What do you want to search?</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="Enter name or type or material..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="primary my-1" onClick={handleSearch}>
            Search
          </Button>
        </div>
        {searchError && (
          <Alert variant="danger" className="mt-3">
            {searchError}
          </Alert>
        )}
        {searchResults.length > 0 && (
          <ListGroup className="mt-3">
            {searchResults.map((product) => (
              <ListGroup.Item
                key={product.id}
                onClick={() => handleProductClick(product)}
              >
                <div className="d-flex">
                  <img
                    src={product.image}
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      "margin-right": "10px",
                      objectFit: "cover",
                    }}
                  />
                  {product.name}
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CompareSearch;
