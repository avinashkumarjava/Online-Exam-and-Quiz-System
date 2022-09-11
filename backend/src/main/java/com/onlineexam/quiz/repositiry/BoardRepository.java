package com.onlineexam.quiz.repositiry;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onlineexam.quiz.model.exam.Board;

public interface BoardRepository extends JpaRepository<Board, Long> {

}
