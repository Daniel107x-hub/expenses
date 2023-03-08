package com.daniel107x.expenses.controller;

import com.daniel107x.expenses.dto.ExpenseDTO;
import com.daniel107x.expenses.dto.ExpenseMapper;
import com.daniel107x.expenses.model.Expense;
import com.daniel107x.expenses.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@RepositoryRestController
public class ExpensesController {
    @Autowired
    ExpenseRepository expenseRepository;

    @PostMapping(value = "/expenses", produces = "application/hal+json")
    public ResponseEntity<ExpenseDTO> createExpense(@RequestBody ExpenseDTO expenseDTO){
        if(expenseDTO == null) return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        Expense expense = expenseRepository.save(ExpenseMapper.toExpense(expenseDTO));
        return new ResponseEntity<>(ExpenseMapper.toDto(expense), HttpStatus.CREATED);
    }

    @GetMapping(value = "/expenses", produces = "application/hal+json")
    public ResponseEntity<List<ExpenseDTO>> getExpenses() {
        Pageable pageable = PageRequest.of(0, 20);
        List<ExpenseDTO> expenses = expenseRepository.findAll(pageable).stream().map(ExpenseMapper::toDto).toList();
        return new ResponseEntity<>(expenses, HttpStatus.OK);
    }
}
