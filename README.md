# Crop Recommendation and Yield Prediction ML Application

This web-based application uses machine learning to provide crop recommendations and yield predictions based on various factors such as soil type, weather conditions, and crop history. The application consists of two models, a Random Forest Classifier for crop recommendation and a Random Forest Regressor for yield prediction.

## Technologies Used

The backend of the application is built using [FASTAPI](https://fastapi.tiangolo.com/), which is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints. FASTAPI provides high performance, easy to use, and scalable APIs, making it an excellent choice for machine learning applications.

The frontend of the application is built using [ReactJS](https://reactjs.org/), a popular JavaScript library for building user interfaces. ReactJS allows for the creation of dynamic and responsive web pages, making it an ideal choice for a modern, interactive machine learning application.

## Functionality

The crop recommendation model takes in various inputs such as soil type, weather conditions, and crop history, and provides recommendations on the best crop to grow in that particular location. The model is built using a Random Forest Classifier algorithm, which is trained on a large dataset of historical crop data.

The yield prediction model takes in similar inputs, as well as additional factors such as crop density and fertilization, and predicts the expected yield for the selected crop. The model is built using a Random Forest Regressor algorithm, which is trained on a large dataset of historical crop yield data.

The application is designed to be user-friendly, with an intuitive interface that allows users to input their data and receive crop recommendations and yield predictions quickly and easily.

## Installation

To install the application, follow these steps:

1. Clone the repository to your local machine
2. Navigate to the backend directory and install the required dependencies using `pip install -r requirements.txt`
3. Start the backend server using `uvicorn main:app --reload`
4. Navigate to the frontend directory and install the required dependencies using `npm install`
5. Start the frontend server using `npm start`

## Conclusion

This crop recommendation and yield prediction ML application provides farmers and growers with valuable insights into crop selection and yield potential. By leveraging the power of machine learning and modern web technologies such as FASTAPI and ReactJS, the application provides accurate and reliable recommendations to help users maximize their crop yields and profits.
