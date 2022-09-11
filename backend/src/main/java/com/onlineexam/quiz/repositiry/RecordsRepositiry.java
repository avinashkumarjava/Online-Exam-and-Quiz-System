package com.onlineexam.quiz.repositiry;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onlineexam.quiz.model.User;
import com.onlineexam.quiz.model.exam.AttemptedQuizRecords;
import com.onlineexam.quiz.model.exam.Quiz;

public interface RecordsRepositiry extends JpaRepository<AttemptedQuizRecords, Long> {

	Set<AttemptedQuizRecords> findByQuiz(Quiz quiz);
	
	Set<AttemptedQuizRecords> getRecordsByUser(User user);
	
	Set<AttemptedQuizRecords> getRecordByUsername(String username);
}
