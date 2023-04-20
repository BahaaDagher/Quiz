import styled from "@emotion/styled";

const Container = styled("div")(({theme}) =>( {
    fontFamily:"cursive",
    // background: "linear-gradient(190deg, #7cc6fe 0%, rgba(0,26,63,1) 100%)" , 
    backgroundColor : "#7cc6fe" , 
    width: "90%" ,
    height : "500px" ,
    margin  : "auto" ,
    marginTop : "70px" ,
    display : "flex" ,
    justifyContent : "center" ,
    alignItems : "center" , 
    justifyContent: "space-around" , 
    borderRadius : "20px" ,
}))
const AppName = styled("h1")(({theme}) =>( {
    width : "30%" ,
    color : "#252d4a" ,
    display : "flex" ,
    justifyContent : "center" ,
    alignItems : "center" ,
    fontSize : "70px" ,
    fontWeight : "bold" ,

}))
const QuizContainer  = styled("div")(({theme}) =>( {
    width : "60%" ,
    backgroundColor : "#252d4a" ,
    color : "#ebecee" ,
    display : "flex" ,
    justifyContent : "space-between" ,
    padding : "70px" ,
    alignItems : "center" ,
    borderRadius : "20px" ,
    boxShadow : "0px 10px 30px #252d4a"   , 
    
}))
const QuestionContainer  = styled("h2")(({theme}) =>( {
    width : "45%" ,
    color : "#ebecee" ,
    height : "200px" , 
    marginRight : "20px" ,
    
}))
const Question  = styled("h2")(({theme}) =>( {
    marginTop : "20px" ,
    fontWeight : "bold" ,
}))
const NumberOfQuestion  = styled("span")(({theme}) =>( {
    fontSize : "20px" ,
    fontWeight : "bold" ,
    color: "yellow" ,
}))
const AnswersContainer  = styled("div")(({theme}) =>( {
    width : "55%" ,
    color : "#ebecee" ,
    marginLeft: "20px" ,
    display : "flex" ,
    flexDirection : "column" ,
    justifyContent : "center" ,

    
}))

const Answer  = styled("div")(({theme}) =>( {
    border: "4px solid #234668 " ,
    borderRadius : "20px" ,
    margin : "10px" ,
    padding : "10px" ,
    fontWeight : "bold" ,
    fontSize : "20px" ,
    transition : "background-color 0.2s ease-in-out, color 0.2s ease-in-out , border 0.2s ease-in-out" , 
    '&:hover' :{
        backgroundColor : "#234668" ,
        color : "#7cc6fe" ,
        cursor : "pointer" ,
        borderColor : "#7cc6fe" ,
    }


}))




const Quiz = ()=>{
return (
    <>
        <Container>
            <AppName>
                Quiz App
            </AppName>
            <QuizContainer>
                <QuestionContainer>
                    Question  1 /<NumberOfQuestion> 4 </NumberOfQuestion>
                    <Question>what is my name ?</Question>
                </QuestionContainer>
                <AnswersContainer>
                    <Answer>bahaa mohamed dagher</Answer>
                    <Answer>mohamed mohsen sayed ibrahim   </Answer>
                    <Answer>ahmed alaa ElDin mohamed </Answer>
                    <Answer>Esma3el mahmoud sha3ban </Answer> 
                </AnswersContainer>
            </QuizContainer>

        </Container>
    </>
)
}
export default Quiz;