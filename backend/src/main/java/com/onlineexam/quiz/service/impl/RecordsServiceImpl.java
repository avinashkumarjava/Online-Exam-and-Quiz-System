package com.onlineexam.quiz.service.impl;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlineexam.quiz.model.exam.AttemptedQuizRecords;
import com.onlineexam.quiz.model.exam.Quiz;
import com.onlineexam.quiz.repositiry.RecordsRepositiry;
import com.onlineexam.quiz.service.RecordsService;

@Service
public class RecordsServiceImpl implements RecordsService {
	
	@Autowired
	private RecordsRepositiry recordsRepositiry;

	@Override
	public AttemptedQuizRecords addRecord(AttemptedQuizRecords record) {
		return this.recordsRepositiry.save(record);
	}

	@Override
	public AttemptedQuizRecords updateRecord(AttemptedQuizRecords record) {
		return this.recordsRepositiry.save(record);
	}

	@Override
	public Set<AttemptedQuizRecords> getRecords() {
		return new HashSet<AttemptedQuizRecords>(this.recordsRepositiry.findAll());
	}

	@Override
	public AttemptedQuizRecords getRecord(Long recordId) {
		return this.recordsRepositiry.findById(recordId).get();
	}

	@Override
	public void deleteRecord(Long recordId) {
		this.recordsRepositiry.deleteById(recordId);
	}

	@Override
	public Set<AttemptedQuizRecords> getRecordsOfUser(String username) {
		return new HashSet<AttemptedQuizRecords>(this.recordsRepositiry.getRecordByUsername(username));
	}

	@Override
	public Set<AttemptedQuizRecords> getRecordsOfQuiz(Quiz quiz) {
		return new HashSet<>(this.recordsRepositiry.findByQuiz(quiz));
	}

}
