import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { savNewQuestion } from "../request";
import "./style.css";

function NewQuestion() {
  const history = useHistory();
  const initState = {
    quesText: "",
    quesImg: null,
    saving: false,
  };

  const [state, setState] = useState(initState);

  const handleChange = (e) => {
    if (e.target.name === "quesImg") {
      setState((pr) => ({
        ...pr,
        quesImg: e.target.files,
      }));
    } else {
      setState((pr) => ({
        ...pr,
        quesText: e.target.value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.quesText.length === 0) {
      return;
    }

    let fd = new FormData();
    setState((pr) => ({
      ...pr,
      saving: true,
    }));

    if (state.quesText.length > 0) {
      fd.append("ques_text", state.quesText);
    }
    if (state.quesImg !== null && state.quesImg !== undefined) {
      fd.append("ques_image", state.quesImg[0]);
    }
    console.log(fd);
    savNewQuestion(fd)
      .then((res) => {
        setState((pr) => ({
          ...pr,
          saving: false,
        }));
        console.log(history);
        history.push({
          pathname: `/questions/${res.data.id}`,
        });
      })
      .catch(console.log);
  };

  return (
    <div className="new-question-container">
      <form>
        <textarea
          className="ques-textarea"
          name="quesText"
          placeholder="Type new question..."
          onChange={handleChange}
          required
        />
        <div>
          <input
            type="file"
            accept="image/*"
            name="quesImg"
            onChange={handleChange}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            type="submit"
            onClick={handleSubmit}
            className={state.saving ? `saving` : ``}
            // disabled={state.saving}
          >
            {state.saving ? `Saving` : `Submit Question`}
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewQuestion;
