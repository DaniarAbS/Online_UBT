// ExamPage.js
import React, { useState } from 'react';
import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from './FilterExam.css';

const ExamPage = () => {
  const [language, setLanguage] = useState('russian'); // 'kazakh' or 'russian'
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const handleSubjectSelect = (subject) => {
    setSelectedSubjects((prevSelectedSubjects) =>
      prevSelectedSubjects.includes(subject)
        ? prevSelectedSubjects.filter((sub) => sub !== subject)
        : [...prevSelectedSubjects, subject]
    );
  };

  const handleSubmit = () => {
    console.log('Selected language:', language);
    console.log('Selected subjects:', selectedSubjects);
    // Submit these values to your backend or handle them as needed
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Сдать экзамен</h1>
        {/* Placeholder for the profile component */}
      </div>
      <div className={styles.languageToggle}>
        <button
          className={`${styles.languageButton} ${
            language === 'kazakh' && styles.languageButtonActive
          }`}
          onClick={() => handleLanguageChange('kazakh')}
        >
          На казахском
        </button>
        <button
          className={`${styles.languageButton} ${
            language === 'russian' && styles.languageButtonActive
          }`}
          onClick={() => handleLanguageChange('russian')}
        >
          На русском
        </button>
      </div>
      <div className={styles.subjectCategory}>
        <h2>Обязательные предметы</h2>
        {/* Repeat for each subject */}
        <button
          className={styles.subjectButton}
          onClick={() => handleSubjectSelect('math')}
        >
          Математика
        </button>
        {/* ... other subjects */}
      </div>
      <div className={styles.subjectCategory}>
        <h2>Выборочные предметы</h2>
        {/* Repeat for each subject */}
        <button
          className={styles.subjectButton}
          onClick={() => handleSubjectSelect('biology')}
        >
          Биология
        </button>
        {/* ... other subjects */}
      </div>
      <button className={styles.startButton} onClick={handleSubmit}>
        Начать
      </button>
    </div>
  );
};

export default ExamPage;
