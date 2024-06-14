import 'survey-core/defaultV2.min.css';
import { useCallback } from 'react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { BorderlessDark } from 'survey-core/themes/borderless-dark'
import Box from '@mui/material/Box';


const modelJSON = {
  elements: [{
    name: "summary",
    title: "Give us a one sentence summary: ",
    type: "text",
    isRequred: true
  },
  {
    name: "detailedReview",
    title: "Enter your full review: ",
    type: "comment",
    isRequred: true
  },
  {
    name: "stars",
    title: "Enter Star rating:",
    type: "rating",
    rateType: "stars",
    rateCount: 5,
    rateMax: 5,
    displayMode: "buttons"
  }]
}

export default function ReviewForm(props) {
  let {style, handleEditStyle} = props;

  console.log(`ReviewForm - Selected Style is - ${style.name}`);
  

  const surveyComplete = useCallback((survey, e) => {
    let review = survey.valuesHash;
    review.reviewDate = new Date();
    style.reviews.push(review);
    console.log(style);
    if(handleEditStyle) {
      handleEditStyle(style, e);
    }
    survey.clear();
  }, []);

  const survey = new Model(modelJSON);
  survey.applyTheme(BorderlessDark);
  survey.onComplete.add(surveyComplete);

  return (
    <Box sx={{width:'30%'}}>
      <Survey model={survey} />
    </Box>
  );

}