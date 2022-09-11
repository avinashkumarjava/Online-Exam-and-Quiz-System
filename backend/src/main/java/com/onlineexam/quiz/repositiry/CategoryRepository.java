package com.onlineexam.quiz.repositiry;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onlineexam.quiz.model.exam.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}
