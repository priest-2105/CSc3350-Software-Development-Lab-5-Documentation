# CSc3350: Software Development Lab 5

This project is part of the CSc3350 Software Development Lab 5 assignment. The objective is to create and populate a MySQL database for employee payroll data, and then use Java to query and display that data. The Java program is divided into two classes:

- **GetEmployeesPayroll.java:** Retrieves all employee records and, for each employee, calls the payroll retrieval method.
- **Payroll.java:** Contains a method `getPayByMonth()` that takes an employee ID and a SQL connection to retrieve payroll details for that employee.

## Table of Contents

- [Project Overview](#project-overview)
- [Database Setup](#database-setup)
  - [Using phpMyAdmin](#using-phpmyadmin)
  - [SQL Scripts](#sql-scripts)
- [Java Code Execution](#java-code-execution)
- [Usage](#usage)
- [Submission Requirements](#submission-requirements)
- [Notes](#notes)

## Project Overview

The main goals of this lab assignment are to:

1. **Create a MySQL database** (`employeedata`) with the necessary tables.
2. **Insert sample data** into the tables.
3. **Implement a Java program** that:
   - Retrieves all employee records.
   - For each employee, calls a helper method (in the `Payroll` class) to retrieve payroll details.
   - Displays a formatted report titled "EMPLOYEE PAYROLL REPORT by [Your Name]".

The project has been tested using phpMyAdmin to run the SQL scripts, which many users find easier than dBeaver.

## Database Setup

### Using phpMyAdmin

You can use phpMyAdmin’s SQL tab to execute the  scripts:
