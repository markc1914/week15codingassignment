import 'survey-core/defaultV2.min.css';
import { useCallback } from 'react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { BorderlessDark } from 'survey-core/themes/borderless-dark'

export const styleJson = {
  elements: [{
    name: "name",
    title: "Enter the Item Name: ",
    type: "text",
    isRequred: true
  },
  {
    name: "description",
    title: "Enter a brief description: ",
    type: "comment",
    isRequred: true
  },
  {
    name: "stars",
    title: "Enter Star rating",
    type: "rating",
    rateType: "stars",
    rateCount: 5,
    rateMax: 5,
    displayMode: "buttons"
  },
  {
    name: "imageURL",
    title: "Enter the Product image URL: ",
    type: "text",
    isRequred: true
  },
  {
    name: "purchaseURL",
    title: "Enter the Product Purchase URL: ",
    type: "text",
    isRequred: true
  },
  {
    name: "price",
    title: "Enter the item price: ",
    inputType: "number",
    type: "text",
    min: 0,
    max: 1000,
    defaultValue: 80,
    isRequred: true
  }
  ]
}

export default function StyleForm(props) {

  const handleSubmitStyle = props.handleSubmitStyle;

  if(handleSubmitStyle){
    console.log(`SurveyForm handleSubmitStyle Function is ${handleSubmitStyle}`);
  }

  const surveyComplete = useCallback((survey, e) => {
    let style = survey.valuesHash;
    style.reviews = [];
    console.log(style);
    if(handleSubmitStyle) {
      handleSubmitStyle(style, e);
    }
    survey.clear();
  }, []);

  const survey = new Model(styleJson);
  survey.applyTheme(BorderlessDark);
  survey.onComplete.add(surveyComplete);

  return (
    <Survey model={survey} />
  );
}
