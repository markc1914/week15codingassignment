import { styleJson } from "./StyleForm";
import 'survey-core/defaultV2.min.css';
import { useCallback } from 'react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { BorderlessDark } from 'survey-core/themes/borderless-dark'

// becaause it's literally the same form model
const styleEditModel = styleJson;

export default function StyleEditForm(props) {
  const handleEditStyle = props.handleEditStyle;
  const idToEdit = props.idToEdit;
  const styleToEdit = props.styleToEdit;

  console.log(`StyleEditForm() got ${styleToEdit.id}`);

  const surveyComplete = useCallback((survey, e) => {
    let style = survey.valuesHash
    style.id = idToEdit;
    console.log(style);
    if (handleEditStyle) {
      handleEditStyle(style, e);
    }
  }, []);


  const survey = new Model(styleEditModel);
  survey.applyTheme(BorderlessDark);
  survey.onComplete.add(surveyComplete);
  if (styleToEdit) {
    survey.data = {
      name: styleToEdit.name,
      description: styleToEdit.description,
      imageURL: styleToEdit.imageURL,
      purchaseURL: styleToEdit.purchaseURL,
      price: styleToEdit.price,
      stars: styleToEdit.stars
    }
  }
  return (
    <Survey model={survey} />)

}
