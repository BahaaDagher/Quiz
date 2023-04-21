import styled from "@emotion/styled";
import Questions from "./Questions";
import { useState } from "react";

const Container = styled("div")(({ theme }) => ({
  fontFamily: "cursive",
  background:
    "linear-gradient(190deg, rgba(124,198,254,1) 0%, rgba(255,255,255,1) 100%)",
  padding: "40px",
  backgroundColor: "#FFF",
  width: "90%",
  margin: "auto",
  marginTop: "70px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  justifyContent: "space-around",
  borderRadius: "20px",
  boxShadow: "0px 3px 20px #252d4a",
}));
const AppName = styled("h1")(({ theme }) => ({
  width: "30%",
  color: "#252d4a",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "70px",
  fontWeight: "bold",
}));
const QuizContainer = styled("div")(({ theme }) => ({
  width: "60%",
  backgroundColor: "#252d4a",
  color: "#ebecee",
  display: "flex",
  justifyContent: "space-between",
  padding: "70px",
  alignItems: "center",
  borderRadius: "20px",
  boxShadow: "0px 10px 30px #252d4a",
}));
const QuestionContainer = styled("h2")(({ theme }) => ({
  width: "45%",
  color: "#ebecee",
  height: "200px",
  marginRight: "20px",
}));
const Question = styled("h3")(({ theme }) => ({
  marginTop: "30px",
  fontWeight: "bold",
}));
const NumberOfQuestion = styled("span")(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "bold",
  color: "#7cc6fe",
}));
const AnswersContainer = styled("div")(({ theme }) => ({
  width: "55%",
  color: "#ebecee",
  marginLeft: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const Answer = styled("div")(({ theme }) => ({
  border: "4px solid #234668",
  borderRadius: "20px",
  margin: "10px",
  padding: "10px",
  fontWeight: "bold",
  fontSize: "20px",
  transition:
    "background-color 0.2s ease-in-out, color 0.2s ease-in-out , border 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "#234668",
    cursor: "pointer",
    borderColor: "#7cc6fe",
  },
}));

const ResultContainer = styled(QuizContainer)(({ theme }) => ({
    display : "flex",
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center",
}));
const ResultScore = styled(AppName)(({ theme }) => ({
    width: "100%",
    color: "#FFF",
}));

const AgainButton = styled("siv")(({ theme }) => ({
    fontWeight: "bold",
    fontSize: "20px",
    width: "20%",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 4px 10px 1px rgba(0, 0, 0, 0.3)",
    backgroundColor: "#f24572 ",
    borderRadius: "10px",
    transition: "background-color 0.2s ease",
    marginTop: "20px",
    color: "#fff",
    "&:hover": {
        cursor: "pointer",
        backgroundColor: "#f24572d9",
    },

}));

const Quiz = () => {
  const [index, setIndex] = useState(0);
    const [result, setResult] = useState(0);
    const [finish , setFinish] = useState(false);


  const next = (i) => {
    if (Questions[index]["correctAnswer"]==i) setResult(result+1);
    if (index === Questions.length-1) setFinish(true);
    else setIndex(index + 1);
  };
  const Agin = () =>{
    setFinish(false);
    setIndex(0);
    setResult(0);
  }
  return (
    <>
      <Container>
        <AppName>Quiz App</AppName>
        { finish ? ( 
            <ResultContainer>
                <ResultScore> your result is ( {result} ) </ResultScore>
                <AgainButton onClick = { ()=> Agin()}>Agin</AgainButton>
            </ResultContainer>
        ) : (
        <QuizContainer>
          <QuestionContainer>
            Question {index + 1} /
            <NumberOfQuestion> {Questions.length} </NumberOfQuestion>
            <Question> {Questions[index]["questionText"]}</Question>
          </QuestionContainer>
          <AnswersContainer>
            {Questions[index]["answerOptions"].map((answer , i ) => {
              return (
                <Answer  key = {i} onClick={() => { next(i); }} > {answer} </Answer>
              );
            })}
          </AnswersContainer>
        </QuizContainer>
        )}
      </Container>
    </>
  );
};
export default Quiz;
