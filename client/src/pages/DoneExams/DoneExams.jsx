import { useEffect, useState, useContext } from 'react';
import FinishedExam from '../../components/exam/FinishedExam';
import axios from 'axios';
import styles from './DoneExams.module.css';

import { LanguageContext } from '../../contexts/LanguageContext';
import Loader from '../../components/organism/Loader/Loader';

const DoneExam = () => {
  const [doneExams, setDoneExams] = useState([]);
  const [loading, setLoading] = useState(false);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    async function fetchDoneExams() {
      setLoading(true);
      const user_data = JSON.parse(localStorage.getItem('user_data'));

      if (user_data && user_data.secondId) {
        const studentId = {
          studentId: user_data.secondId
        };

        try {
          const response = await axios.post(
            `https://ubt-server.vercel.app/students/getAllResultsForStudent`,
            studentId
          );
          setDoneExams(response.data);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false); // Stop loading
        }
      } else {
        console.error('User data not found in local storage');
        setLoading(false);
      }
    }

    fetchDoneExams();
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className={styles.examContainer}>
        <div className={styles.mainTitle}>
          {language === 'kz' ? 'Студент тапсырған емтихандар' : 'Сданные экзамены студента'}
        </div>
        <div className={styles.examsList}>
          {doneExams.length > 0 ? (
            doneExams.map((exam, index) => (
              <FinishedExam
                key={index}
                time={exam.time}
                day={exam.day}
                points={exam.overallPoints}
              />
            ))
          ) : (
            <div>{language === 'kz' ? 'Емтихандар табылған жоқ' : 'Экзамены не найдены'}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default DoneExam;