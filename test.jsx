import styles from './TaskAdding.module.css';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { sizes } from '../../base/sizes';
import Input from 'antd/es/input/Input';
import AddImage from '../../assets/icons/add_image_icon.png';
import axios from 'axios';
import config from '../../../config';
import { v4 as uuidv4 } from 'uuid';

import Loader from '../../components/organism/Loader/Loader';
import { LanguageContext } from '../../contexts/LanguageContext';

const TruncatedText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 250px; /* Adjust this width according to your needs */
  font-size: ${sizes.small};
`;

export const TaskAdding = () => {
  const [visibleItemIndex, setVisibleItemIndex] = useState(-1);
  const [selectedDiv, setSelectedDiv] = useState(null);
  const [lastClickedButton, setLastClickedButton] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [question, setQuestion] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');
  const [topics, setTopics] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [answers, setAnswers] = useState([
    { id: uuidv4(), text: '', isCorrect: false },
    { id: uuidv4(), text: '', isCorrect: false },
    { id: uuidv4(), text: '', isCorrect: false },
    { id: uuidv4(), text: '', isCorrect: false }
  ]);
  const [type, setType] = useState(1); // Default to 1-point question
  const [maxCorrectAnswers, setMaxCorrectAnswers] = useState(1);

  const [language, setLanguage] = useState('kz');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchSubjects() {
      try {
        const response = await axios.get(`${config.baseURL}/subjects/`);
        setSubjects(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Stop loading
      }
    }

    fetchSubjects();
  }, []);

  useEffect(() => {
    const teachersSubject = localStorage.getItem('teachersSubject');
    console.log('teachersSubject', teachersSubject);
    if (teachersSubject) {
      async function fetchTopics() {
        setLoading(true);
        try {
          const response = await axios.get(`${config.baseURL}/subjects/${teachersSubject}`);
          console.log('topics: ', response.data.topics);
          setTopics(response.data.topics);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false); // Stop loading
        }
      }

      fetchTopics();
    } else {
      setTopics([]);
    }
  }, [selectedSubject]);

  const handleButtonClick = (buttonNumber) => {
    setLastClickedButton(buttonNumber);
    setType(buttonNumber);
    const updatedAnswers = answers.map((answer) => ({ ...answer, isCorrect: false }));
    setAnswers(updatedAnswers);
    setMaxCorrectAnswers(buttonNumber === 1 ? 1 : 2);
    if (buttonNumber === 1 && answers.length > 4) {
      setAnswers(answers.slice(0, 4));
    }
  };

  const handleAnswerChange = (index, text) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index].text = text;
    setAnswers(updatedAnswers);
  };

  const handleToggleCorrectAnswer = (index) => {
    const updatedAnswers = [...answers];
    if (type === 1) {
      updatedAnswers.forEach((answer, idx) => {
        answer.isCorrect = idx === index;
      });
    } else {
      updatedAnswers[index].isCorrect = !updatedAnswers[index].isCorrect;
      const numCorrectAnswers = updatedAnswers.filter((ans) => ans.isCorrect).length;
      if (numCorrectAnswers > maxCorrectAnswers) {
        updatedAnswers[index].isCorrect = false;
      }
    }
    setAnswers(updatedAnswers);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (!lastClickedButton) {
      alert(language === 'kz' ? 'Сұрақ түрін таңдаңыз.' : 'Выберите тип вопроса.');
      setLoading(false);
      return;
    }

    if (!selectedTopic) {
      alert(language === 'kz' ? 'Тақырып таңдаңыз.' : 'Выберите тему.');
      setLoading(false);
      return;
    }

    if (!question && !image) {
      alert(
        language === 'kz'
          ? 'Сұрақ немесе сурет еңгізіңіз.'
          : 'Введите текст вопроса или добавьте изображение.'
      );
      setLoading(false);
      return;
    }

    const allAnswersFilled = answers.every((answer) => answer.text.trim() !== '');
    if (!allAnswersFilled) {
      alert(
        language === 'kz' ? 'Барлық жауап нұсқаларын еңгізіңіз.' : 'Заполните все варианты ответов.'
      );
      setLoading(false);
      return;
    }

    const atLeastOneCorrect = answers.some((answer) => answer.isCorrect);
    if (!atLeastOneCorrect) {
      alert(
        language === 'kz'
          ? 'Кем дегенде бір дұрыс жауап еңгізіңіз.'
          : 'Выберите хотя бы один правильный ответ.'
      );
      setLoading(false);
      return;
    }

    const correctOptions = answers.filter((answer) => answer.isCorrect).map((answer) => answer.id);
    if (type === 2 && correctOptions.length !== 2) {
      alert(
        language === 'kz'
          ? 'Екі дұрыс жауапты таңдаңыз.'
          : 'Выберите ровно два правильных ответа.'
      );
      setLoading(false);
      return;
    }

    const questionType = type === 1 ? 'onePoint' : 'twoPoints';
    const newQuestion = {
      type: questionType,
      topicId: selectedTopic,
      question,
      image: image ? URL.createObjectURL(image) : '',
      options: answers,
      correctOptions,
      language: language
    };

    console.log('newQuestion', newQuestion);

    try {
      const response = await axios.post(`${config.baseURL}/question/add`, newQuestion);
      console.log(response.data);
      handleReset();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleReset = () => {
    setLastClickedButton(null);
    setType(1);
    setSelectedSubject('');
    setSelectedTopic('');
    setQuestion('');
    setImage(null);
    setImagePreviewUrl('');
    setAnswers([
      { id: uuidv4(), text: '', isCorrect: false },
      { id: uuidv4(), text: '', isCorrect: false },
      { id: uuidv4(), text: '', isCorrect: false },
      { id: uuidv4(), text: '', isCorrect: false }
    ]);
  };

  const handleLanguageToggle = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'kz' ? 'ru' : 'kz'));
  };

  const addNewOption = () => {
    if (answers.length < 8) {
      setAnswers([...answers, { id: uuidv4(), text: '', isCorrect: false }]);
    } else {
      alert(language === 'kz' ? 'Ең көп жауап 8 болуы мүмкін.' : 'Максимум 8 ответов.');
    }
  };

  const removeOption = (index) => {
    if (answers.length > 4) {
      const updatedAnswers = answers.filter((_, i) => i !== index);
      setAnswers(updatedAnswers);
    } else {
      alert(
        language === 'kz'
          ? 'Төрт жауаптан кем болуы мүмкін емес.'
          : 'Нельзя иметь меньше четырех ответов.'
      );
    }
  };

  const renderCorrectAnswerToggle = (index) => {
    return (
      <div
        className={`${styles.correctAnswerToggle} ${answers[index].isCorrect ? styles.correct : ''}`}
        onClick={() => handleToggleCorrectAnswer(index)}
      >
        {answers[index].isCorrect ? <CheckOutlined /> : <CloseOutlined />}
      </div>
    );
  };

  return (
    <>
      {loading && <Loader />}
      <div className={styles.outContainer}>
        <h2>{language === 'kz' ? 'Сұрақ қосу' : 'Добавить вопрос'}</h2>
        <div className={styles.formContainer}>
          <div className={styles.subjectTopicContainer}>
            <div className={styles.subjectDropdown}>
              <label>{language === 'kz' ? 'Пән' : 'Предмет'}</label>
              <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
                <option value="">{language === 'kz' ? 'Пәнді таңдаңыз' : 'Выберите предмет'}</option>
                {subjects.map((subject) => (
                  <option key={subject.id} value={subject.id}>
                    {subject.name}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.topicDropdown}>
              <label>{language === 'kz' ? 'Тақырып' : 'Тема'}</label>
              <select value={selectedTopic} onChange={(e) => setSelectedTopic(e.target.value)}>
                <option value="">{language === 'kz' ? 'Тақырыпты таңдаңыз' : 'Выберите тему'}</option>
                {topics.map((topic) => (
                  <option key={topic.id} value={topic.id}>
                    {topic.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.questionContainer}>
            <label>{language === 'kz' ? 'Сұрақ' : 'Вопрос'}</label>
            <Input
              placeholder={language === 'kz' ? 'Сұрағыңызды еңгізіңіз' : 'Введите ваш вопрос'}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <div className={styles.imageUploadContainer}>
              <label htmlFor="imageUpload" className={styles.imageUploadLabel}>
                <img src={AddImage} alt="Add" className={styles.addImageIcon} />
                {language === 'kz' ? 'Сурет қосу' : 'Добавить изображение'}
              </label>
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
              {imagePreviewUrl && (
                <img src={imagePreviewUrl} alt="Preview" className={styles.imagePreview} />
              )}
            </div>
          </div>
          <div className={styles.answersContainer}>
            <label>{language === 'kz' ? 'Жауаптар' : 'Ответы'}</label>
            {answers.map((answer, index) => (
              <div key={answer.id} className={styles.answerRow}>
                <Input
                  placeholder={language === 'kz' ? 'Жауап' : 'Ответ'}
                  value={answer.text}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                  className={styles.answerInput}
                />
                {renderCorrectAnswerToggle(index)}
                <button className={styles.removeOptionButton} onClick={() => removeOption(index)}>
                  {language === 'kz' ? 'Жою' : 'Удалить'}
                </button>
              </div>
            ))}
            {answers.length < 8 && (
              <button className={styles.addOptionButton} onClick={addNewOption}>
                {language === 'kz' ? 'Жауап қосу' : 'Добавить ответ'}
              </button>
            )}
          </div>
          <div className={styles.pointsContainer}>
            <label>{language === 'kz' ? 'Балдар' : 'Баллы'}</label>
            <div className={styles.pointsButtons}>
              <button
                className={`${styles.pointButton} ${type === 1 ? styles.active : ''}`}
                onClick={() => handleButtonClick(1)}
              >
                1 {language === 'kz' ? 'балл' : 'балл'}
              </button>
              <button
                className={`${styles.pointButton} ${type === 2 ? styles.active : ''}`}
                onClick={() => handleButtonClick(2)}
              >
                2 {language === 'kz' ? 'балл' : 'балла'}
              </button>
            </div>
          </div>
          <button className={styles.submitButton} onClick={handleSubmit}>
            {language === 'kz' ? 'Сақтау' : 'Сохранить'}
          </button>
          <button className={styles.resetButton} onClick={handleReset}>
            {language === 'kz' ? 'Қалпына келтіру' : 'Сбросить'}
          </button>
          <button className={styles.languageToggleButton} onClick={handleLanguageToggle}>
            {language === 'kz' ? 'RU' : 'KZ'}
          </button>
        </div>
      </div>
    </>
  );
};
