package com.onlineexam.quiz.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlineexam.quiz.model.exam.Board;
import com.onlineexam.quiz.repositiry.BoardRepository;
import com.onlineexam.quiz.service.BoardService;

@Service
public class BoardServiceImpl implements BoardService {

	@Autowired
	private BoardRepository boardRepository;

	@Override
	public Board createBoard(Board board) {
		return this.boardRepository.save(board);
	}

	@Override
	public Board updateBoard(Board board) {
		return this.boardRepository.save(board);
	}

	@Override
	public Board getBoard(Long id) {
		return this.boardRepository.findById(id).get();
	}

	@Override
	public List<Board> getAllBoards() {
		return this.boardRepository.findAll();
	}

	@Override
	public void deleteBoard(Long id) {
		this.boardRepository.deleteById(id);
	}
}
