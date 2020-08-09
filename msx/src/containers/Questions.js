import { connect } from "react-redux";
import { getQuestionsList, setChangeVote } from "../actions";
import Questions from "../Component/Questions";

const mapStateToProps = (state) => ({
  QuestionData: state.questions.List,
});

const mapDispatchToProps = (dispatch) => ({
  FetchData: () => {
    dispatch(getQuestionsList());
  },

  ChangeVote: (url) => { 
    dispatch(setChangeVote(url));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
