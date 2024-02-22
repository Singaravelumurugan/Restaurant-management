import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          
          textAlign: "center", p: 1,"& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        My coffeeshop restaurant is a place where you can enjoy a delicious cup of coffee and a variety of dishes in a cosy and friendly atmosphere.
         Whether you are looking for a quick breakfast, a hearty lunch, or a sweet treat, you will find something to satisfy your taste buds.
         You can choose from our menu of sandwiches, salads, soups, burgers, pizzas, pastas, and more, all made with fresh and quality ingredients.
         You can also indulge in our desserts, such as cakes, pies, cookies, and ice cream. And of course, you can't miss our coffee, which is roasted and brewed to perfection.
          We offer different types of coffee, such as espresso, latte, cappuccino, mocha, and americano, as well as tea, hot chocolate, and smoothies.  You can also customize
           your drink with syrups, whipped cream, and toppings. Our coffeeshop restaurant is a perfect spot to relax, chat, work, or study, with free Wi-Fi, 
           comfortable seating, and a warm decor. We also host live music, book clubs, and trivia nights to entertain our customers and create a sense of community.
            Come and visit us today and see why we are the best coffeeshop restaurant in town!

        </p>
        <br />
        <p>
        If you are looking for a place to enjoy a great coffee and a tasty meal, look no further than my coffeeshop restaurant.
         We are a family-owned business that prides itself on serving the best coffee and food in the area.
         You can find us in a charming and spacious location, with a modern and inviting design. Our menu offers
          a wide range of options, from classic breakfast items like eggs, bacon, and pancakes, to lunch and dinner 
          favorites like wraps, burgers, and salads. We also have a selection of vegetarian, vegan, and gluten-free dishes
           to cater to different dietary needs. Our coffee is sourced from local and organic farms, and we roast and grind it
            ourselves to ensure the freshest and most flavorful brew. You can try our signature drinks, such as the caramel macchiato, 
            the mocha latte, or the vanilla cappuccino, or create your own combination with our syrups and toppings. We also have tea, juice,
             and soda for non-coffee drinkers. Our coffeeshop restaurant is more than just a place to eat and drink, it is a place to relax, socialize,
              and have fun. We have free Wi-Fi, board games, magazines, and books for your entertainment. We also host regular events, such as open
               mic nights, poetry readings, and art exhibitions, to showcase the talents of our community. Come and join us today and discover 
               why we are the coffeeshop restaurant of your dreams!
        </p>
      </Box>
    </Layout>
  );
};

export default About;