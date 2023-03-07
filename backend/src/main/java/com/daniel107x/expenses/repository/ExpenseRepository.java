package com.daniel107x.expenses.repository;

import com.daniel107x.expenses.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface ExpenseRepository extends JpaRepository<Expense, Long> {
}
