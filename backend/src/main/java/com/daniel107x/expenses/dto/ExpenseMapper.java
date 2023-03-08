package com.daniel107x.expenses.dto;

import com.daniel107x.expenses.model.Expense;
import org.springframework.stereotype.Component;

@Component
public class ExpenseMapper {
    public static ExpenseDTO toDto(Expense expense){
        ExpenseDTO dto = new ExpenseDTO();
        dto.setId(expense.getId());
        dto.setName(expense.getName());
        dto.setDescription(expense.getDescription());
        dto.setValue(expense.getValue());
        dto.setDateApplied(expense.getDateApplied());
        return dto;
    }

    public static Expense toExpense(ExpenseDTO dto){
        Expense expense = new Expense();
        expense.setName(dto.getName());
        expense.setDescription(dto.getDescription());
        expense.setValue(dto.getValue());
        expense.setDateApplied(dto.getDateApplied());
        return expense;
    }
}
