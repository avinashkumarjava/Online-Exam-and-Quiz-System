package com.onlineexam.quiz.repositiry;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onlineexam.quiz.model.exam.Question;
import com.onlineexam.quiz.model.exam.Quiz;

public interface QuestionRepository extends JpaRepository<Question, Long> {
	
	Set<Question> findByQuiz(Quiz quiz);

}
