import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './FilterExam.module.css';

import { LanguageContext } from '../../contexts/LanguageContext';
import Loader from '../../components/organism/Loader/Loader';

const FilterExam = () => {
  const [examLanguage, setExamLanguage] = useState('kz'); // 'kazakh' or 'russian'
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [secondId, setSecondId] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const { language } = useContext(LanguageContext);

  // Retrieve selectedExamId from URL parameters
  const searchParams = new URLSearchParams(location.search);
  const selectedExamId = searchParams.get('selectedExamId');

  useEffect(() => {
    async function fetchSubject() {
      setLoading(true);
      const user_data = JSON.parse(localStorage.getItem('user_data'));
      setSecondId(user_data.secondId);

      try {
        const response = await axios.get('https://ubt-server.vercel.app/subjects/');
        console.log('response:', response.data);
        setSubjects(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Stop loading
      }
    }

    fetchSubject();
  }, []);

  useEffect(() => {
    const mandatorySubjectsIds = subjects
      .filter(
        (subject) =>
          ['Грамотность чтения', 'Математическая грамотность', 'История Қазахстанa'].includes(
            subject.ru_subject
          ) ||
          ['Оқу сауаттылығы', 'Математикалық сауаттылық', 'Қазақстан тарихы'].includes(
            subject.kz_subject
          )
      )
      .map((subject) => subject._id);

    setSelectedSubjects(mandatorySubjectsIds);
  }, [subjects]);

  const handleLanguageChange = (lang) => {
    setExamLanguage(lang);
  };

  const toggleSubject = (subjectId) => {
    if (selectedSubjects.includes(subjectId)) {
      setSelectedSubjects(selectedSubjects.filter((id) => id !== subjectId));
    } else if (selectedSubjects.length < 5 || selectedSubjects.slice(3).includes(subjectId)) {
      setSelectedSubjects([...selectedSubjects, subjectId]);
    } else {
      alert(
        language === 'kz'
          ? 'Тек қана 2 таңдамалы пәнді таңдауға болады.'
          : 'Вы можете выбрать только 2 выборочных предмета.'
      );
    }
  };

  async function handleSubmit() {
    setLoading(true);

    if (selectedSubjects.length !== 5) {
      alert('Выберите как минимум пять предметов, включая обязательные и выборочные.');
      setLoading(false);
      return;
    }

    const startExam = {
      examId: selectedExamId,
      selectedSubjectIds: selectedSubjects,
      studentId: secondId,
      language: examLanguage
    };

    console.log('startExam', startExam);

    try {
      const response = await axios.post(
        'https://ubt-server.vercel.app/students/startExam/',
        startExam
      );
      console.log('response:', response);
      navigate('/test', { state: { examData: response.data, startExam: startExam } });
    } catch (error) {
      console.error(error);
      alert(error.response.data.message);
    } finally {
      setLoading(false); // Stop loading
    }
  }

  const mandatorySubjectsRu = subjects.filter((subject) =>
    ['Грамотность чтения', 'Математическая грамотность', 'История Қазахстанa'].includes(
      subject.ru_subject
    )
  );

  const mandatorySubjectsKz = subjects.filter((subject) =>
    ['Оқу сауаттылығы', 'Математикалық сауаттылық', 'Қазақстан тарихы'].includes(subject.kz_subject)
  );

  const optionalSubjectsRu = subjects.filter(
    (subject) =>
      !['Грамотность чтения', 'Математическая грамотность', 'История Қазахстанa'].includes(
        subject.ru_subject
      )
  );

  const optionalSubjectsKz = subjects.filter(
    (subject) =>
      !['Оқу сауаттылығы', 'Математикалық сауаттылық', 'Қазақстан тарихы'].includes(
        subject.kz_subject
      )
  );

  return (
    <>
      {loading && <Loader />}
      <div className={styles.wholeContainer}>
        <div className={styles.heading}>
          <h1>{language === 'kz' ? 'Емтихан тапсыру' : 'Сдать экзамен'}</h1>
        </div>
        <div className={styles.container}>
          <div className={`row table_row ${styles.titleButtonsContainer}`}>
            <h4 className="col-3 table_item">
              {language === 'kz' ? 'Емтихан тілін таңдау' : 'Выберите язык экзамена'}
            </h4>
            <div className={`col-8 table_item ${styles.chosingBtns}`}>
              <button
                className={`${styles.languageButton} ${examLanguage === 'kz' && styles.languageButtonActive}`}
                onClick={() => handleLanguageChange('kz')}
              >
                {language === 'kz' ? 'Қазақша' : 'На казахском'}
              </button>
              <button
                className={`${styles.languageButton} ${examLanguage === 'ru' && styles.languageButtonActive}`}
                onClick={() => handleLanguageChange('ru')}
              >
                {language === 'kz' ? 'Орысша' : 'На русском'}
              </button>
            </div>
          </div>
          <div className={`row table_row ${styles.titleButtonsContainer}`}>
            <h4 className="col-3 table_item">
              {language === 'kz' ? 'Міндетті пәндер' : 'Обязательные предметы'}
            </h4>
            <div className={`col-8 table_item ${styles.chosingBtns}`}>
              {(language === 'kz' ? mandatorySubjectsKz : mandatorySubjectsRu).map((subject) => (
                <button
                  key={subject._id}
                  className={styles.subjectButton}
                  onClick={() => toggleSubject(subject._id)}
                  disabled={selectedSubjects.includes(subject._id)}
                >
                  {language === 'kz' ? subject.kz_subject : subject.ru_subject}
                </button>
              ))}
            </div>
          </div>
          <div className={`row table_row ${styles.titleButtonsContainer}`}>
            <h4 className="col-2 table_item">
              {language === 'kz' ? 'Таңдамалы пәндер' : 'Выборочные предметы'}
            </h4>
            <div className={`col-8 table_item ${[styles.chosingBtns, styles.btnGap].join(' ')}`}>
              {(language === 'kz' ? optionalSubjectsKz : optionalSubjectsRu).map((subject) => (
                <button
                  key={subject._id}
                  onClick={() => toggleSubject(subject._id)}
                  disabled={selectedSubjects.length >= 5 && !selectedSubjects.includes(subject._id)}
                  className={`${styles.subjectButton} ${selectedSubjects.includes(subject._id) ? styles.selected : styles.unselected}`}
                >
                  {language === 'kz' ? subject.kz_subject : subject.ru_subject}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.btnCont}>
          <button className={styles.startButton} onClick={handleSubmit}>
            {language === 'kz' ? 'Бастау' : 'Начать'}
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterExam;
