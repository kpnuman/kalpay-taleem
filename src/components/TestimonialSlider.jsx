/* eslint-disable no-unused-vars */
import { Card, CardContent, Typography, Grid, Rating } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const cardWidth = 280; // Adjust the card width as needed
const cardHeight = 200; // Adjust the card height as needed

const testimonials = [
  {
    name: "John Doe",
    jobTitle: "Software Engineer",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    rating: 1,
  },
  {
    name: "Jane Smith",
    jobTitle: "Product Manager",
    review:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
  {
    name: "Alice Johnson",
    jobTitle: "Designer",
    review: "Consectetur adipiscing elit...",
    rating: 3,
  },
  {
    name: "Bob Williams",
    jobTitle: "Marketing Manager",
    review: "Lorem ipsum dolor sit amet...",
    rating: 4,
  },
  {
    name: "Bob Williams",
    jobTitle: "Marketing Manager",
    review: "Lorem ipsum dolor sit amet...",
    rating: 4,
  },

  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 4 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < testimonials.length - 1
        ? prevIndex + 4
        : prevIndex
    );
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <Grid container spacing={0} justifyContent="center">
          {testimonials.map((testimonial, index) => (
            <Grid item key={index} style={{ margin: "0", padding: "0", transform: `translateX(${(index - currentIndex) * (100)}px)` }}>
              <Card
                className="border border-warning rounded"
                style={{
                  width: cardWidth,
                  height: cardHeight,
                }}
              >
                <CardContent>
                  <div className="d-flex align-items-center gap-2">
                    <img
                      style={{ borderRadius: "5px" }}
                      src={`https://via.placeholder.com/45x45?text=${testimonial.name}`}
                      alt={testimonial.name}
                    />
                    <div>
                      <Typography variant="h6" component="div">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="subtitle6" color="textSecondary">
                        {testimonial.jobTitle}
                      </Typography>
                    </div>
                  </div>
                  <Rating
                    name="read-only"
                    value={testimonial.rating}
                    readOnly
                    size="small"
                    className="mt-2"
                  />
                  <Typography variant="body2" color="textSecondary">
                    {testimonial.review}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      <div className="d-flex justify-content-end px-5 gap-2 mt-4">
        <KeyboardArrowLeftIcon
          onClick={handlePrev}
          style={{
            borderRadius: "5px",
            background: "#FFD844",
            cursor: "pointer"
          }}
        />
        <KeyboardArrowRightIcon
          onClick={handleNext}
          style={{
            color: 'white',
            borderRadius: "5px",
            background: "#BC263A",
            cursor: "pointer"
          }}
        />
      </div>
    </>
  );
};

export default TestimonialSlider;
