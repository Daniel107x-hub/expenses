package com.daniel107x.expenses.repository;

import com.daniel107x.expenses.model.Income;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IncomesRepository extends JpaRepository<Income, Long> {
}
