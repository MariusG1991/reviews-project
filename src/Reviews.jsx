import people from "./data";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const prevPerson = () => {
    setIndex((currIndex) => {
      const newIndex = currIndex - 1;
      if (newIndex < 0) {
        return people.length - 1;
      }
      return newIndex;
    });
  };
  const nextPerson = () => {
    setIndex((currIndex) => {
      const newIndex = currIndex + 1;
      if (newIndex > people.length - 1) {
        return 0;
      }
      return newIndex;
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    if (randomNumber > people.length - 1) {
      return 0;
    }
    setIndex(randomNumber);
  };
  return (
    <div className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h3 className="author">{name}</h3>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button type="button" className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button type="button" className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button type="button" className="btn btn-hipster" onClick={randomPerson}>
        random person
      </button>
    </div>
  );
};
export default Reviews;
