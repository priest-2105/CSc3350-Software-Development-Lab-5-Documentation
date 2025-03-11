export function DocContent() {
  return (
    <div className="space-y-12">
      <section id="introduction" className="scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
        <p className="text-muted-foreground mb-4">
          To complete Lab 5 of CSc3350: Software Development, follow these detailed instructions, including the
          installation of DBeaver, setting up the required database, and implementing the necessary Java classes.
        </p>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-yellow-800 dark:text-yellow-400">
            Important Note on Case Sensitivity
          </h3>
          <p className="text-muted-foreground">
            When working with databases, be aware of case sensitivity issues. MySQL on Windows is case-insensitive for
            table names, but MySQL on Linux/macOS is case-sensitive. For consistency, we recommend using lowercase for
            database names (e.g., <code className="bg-muted px-1 py-0.5 rounded">employeedata</code> instead of{" "}
            <code className="bg-muted px-1 py-0.5 rounded">employeeData</code>). This prevents issues when moving
            between different operating systems.
          </p>
        </div>
      </section>

      <section id="installation" className="scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">Installation</h2>
        <p className="text-muted-foreground mb-4">
          DBeaver is a free, multi-platform database management tool that supports various databases, including MySQL.
          Follow the steps below to install DBeaver on your system:
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">For Windows:</h3>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>
            <strong>Download DBeaver:</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Visit the DBeaver Community Edition download page.</li>
              <li>Choose the Windows installer that matches your system architecture (32-bit or 64-bit).</li>
            </ul>
          </li>
          <li>
            <strong>Install DBeaver:</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Run the downloaded installer executable.</li>
              <li>Follow the on-screen instructions to complete the installation.</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">For macOS:</h3>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>
            <strong>Download DBeaver:</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Go to the DBeaver Community Edition download page.</li>
              <li>Select the macOS DMG installer.</li>
            </ul>
          </li>
          <li>
            <strong>Install DBeaver:</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Open the downloaded DMG file.</li>
              <li>Drag and drop DBeaver into the Applications folder.</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Alternative: Using phpMyAdmin</h3>
        <p className="text-muted-foreground mb-4">
          While the lab instructions mention DBeaver, using phpMyAdmin is perfectly acceptable and often easier for
          executing SQL scripts because:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>It provides a web interface that's straightforward and user-friendly.</li>
          <li>You can quickly verify table creation and data insertion via the GUI.</li>
          <li>It's often pre-installed with XAMPP, WAMP, or MAMP development environments.</li>
        </ul>
      </section>

      <section id="database-setup" className="scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">Database Setup</h2>
        <p className="text-muted-foreground mb-4">
          After installing DBeaver or setting up phpMyAdmin, proceed with the following steps to set up the employeedata
          database:
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Creating the Database and Tables</h3>
        <p className="text-muted-foreground mb-4">
          Use the following SQL script (employeeData_MySQL_create.sql) to create the database and tables:
        </p>

        <div className="bg-muted p-4 rounded-lg my-4">
          <pre className="text-sm overflow-x-auto">
            <code>{`-- Drop and recreate the database with a consistent lowercase name
DROP DATABASE IF EXISTS employeedata;
CREATE DATABASE employeedata;
USE employeedata;

-- Create table: employees
CREATE TABLE employees (
  empid INT NOT NULL,
  Fname VARCHAR(65) NOT NULL,
  Lname VARCHAR(65) NOT NULL,
  email VARCHAR(65) NOT NULL,
  HireDate DATE,
  Salary DECIMAL(10,2) NOT NULL,
  SSN VARCHAR(12),
  PRIMARY KEY (empid)
);

-- Create table: payroll
CREATE TABLE payroll (
  payID INT,
  pay_date DATE,
  earnings DECIMAL(8,2),
  fed_tax DECIMAL(7,2),
  fed_med DECIMAL(7,2),
  fed_SS DECIMAL(7,2),
  state_tax DECIMAL(7,2),
  retire_401k DECIMAL(7,2),
  health_care DECIMAL(7,2),
  empid INT,
  PRIMARY KEY (payID)
);

-- Create table: employee_job_titles
CREATE TABLE employee_job_titles (
  empid INT NOT NULL,
  job_title_id INT NOT NULL,
  PRIMARY KEY (empid, job_title_id)
);

-- Create table: job_titles
CREATE TABLE job_titles (
  job_title_id INT,
  job_title VARCHAR(125) NOT NULL,
  PRIMARY KEY (job_title_id)
);

-- Create table: employee_division
CREATE TABLE employee_division (
  empid INT NOT NULL,
  div_ID INT NOT NULL,
  PRIMARY KEY (empid)
);

-- Create table: division
CREATE TABLE division (
  ID INT NOT NULL,
  Name VARCHAR(100) DEFAULT NULL,
  city VARCHAR(50) NOT NULL,
  addressLine1 VARCHAR(50) NOT NULL,
  addressLine2 VARCHAR(50) DEFAULT NULL,
  state VARCHAR(50) DEFAULT NULL,
  country VARCHAR(50) NOT NULL,
  postalCode VARCHAR(15) NOT NULL,
  PRIMARY KEY (ID)
);`}</code>
          </pre>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">Inserting Data</h3>
        <p className="text-muted-foreground mb-4">
          After creating the tables, use the following SQL script (employeeData_INSERT_datum.sql) to insert sample data:
        </p>

        <div className="bg-muted p-4 rounded-lg my-4">
          <pre className="text-sm overflow-x-auto">
            <code>{`USE employeedata;

SET FOREIGN_KEY_CHECKS = 0;

-- Insert data into job_titles
INSERT INTO job_titles (job_title_id, job_title)
VALUES 
  (100, 'software manager'),
  (101, 'software architect'),
  (102, 'software engineer'),
  (103, 'software developer'),
  (200, 'marketing manager'),
  (201, 'marketing associate'),
  (202, 'marketing assistant'),
  (900, 'Chief Exec. Officer'),
  (901, 'Chief Finn. Officer'),
  (902, 'Chief Info. Officer');

-- Insert data into employees
INSERT INTO employees (empid, Fname, Lname, email, HireDate, Salary, SSN)
VALUES 
  (1, 'Snoopy',    'Beagle',   'Snoopy@example.com',   '2022-08-01', 45000.00, '111-11-1111'),
  (2, 'Charlie',   'Brown',    'Charlie@example.com',  '2022-07-01', 48000.00, '111-22-1111'),
  (3, 'Lucy',      'Doctor',   'Lucy@example.com',     '2022-07-03', 55000.00, '111-33-1111'),
  (4, 'Pepermint', 'Patti',    'Peppermint@example.com','2022-08-02', 98000.00, '111-44-1111'),
  (5, 'Linus',     'Blanket',  'Linus@example.com',    '2022-09-01', 43000.00, '111-55-1111');

-- Insert payroll data (example for empid=1)
INSERT INTO payroll (payID, pay_date, empid, earnings, fed_tax, fed_med, fed_SS, state_tax, retire_401k, health_care)
SELECT 
  1,
  '2025-01-31', 
  1, 
  Salary/52.0, 
  (Salary/52.0)*0.32, 
  (Salary/52.0)*0.0145,
  (Salary/52.0)*0.062,
  (Salary/52.0)*0.12,
  (Salary/52.0)*0.004,
  (Salary/52.0)*0.031
FROM employees 
WHERE empid = 1;

-- Insert data into employee_division
INSERT INTO employee_division (empid, div_ID)
VALUES
  (1, 999),
  (2, 999),
  (3, 999);

-- Insert data into division
INSERT INTO division (ID, Name, city, addressLine1, addressLine2, state, country, postalCode)
VALUES
  (1, 'Technology Engineering', 'Atlanta', '200 17th Street NW', '', 'GA', 'USA', '30363'),
  (999, 'HQ', 'New York', '45 West 57th Street', '', 'NY', 'USA', '00034');

-- Insert data into employee_job_titles
INSERT INTO employee_job_titles (empid, job_title_id)
VALUES
  (1, 902),
  (2, 900),
  (3, 901);`}</code>
          </pre>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg mt-6">
          <h3 className="text-lg font-semibold mb-2 text-yellow-800 dark:text-yellow-400">Case Sensitivity Issues</h3>
          <p className="text-muted-foreground">
            Note that in the SQL scripts, we use <code className="bg-muted px-1 py-0.5 rounded">employeedata</code>{" "}
            (lowercase) instead of <code className="bg-muted px-1 py-0.5 rounded">employeeData</code> (mixed case) to
            avoid case sensitivity issues. Similarly, when connecting from your Java code, ensure you use the same case
            for the database name.
          </p>
        </div>
      </section>

      <section id="java-implementation" className="scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">Java Implementation</h2>
        <p className="text-muted-foreground mb-4">
          With the database set up, proceed to implement the required Java classes:
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">GetEmployeesPayroll.java:</h3>
        <div className="bg-muted p-4 rounded-lg my-4">
          <pre className="text-sm overflow-x-auto">
            <code>{`import java.sql.*;
import java.util.Scanner;

public class GetEmployeesPayroll {
    public static void main(String[] args) {
        Connection conn = null;
        try {
            // Load the JDBC driver and establish connection
            // Note: Using lowercase "employeedata" for consistency
            conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/employeedata", 
                "root", "password"
            );

            // Query to retrieve employee records
            String empQuery = "SELECT e.empid, e.Fname, e.Lname, e.email, j.job_title " +
                             "FROM employees e " +
                             "JOIN employee_job_titles ej ON e.empid = ej.empid " +
                             "JOIN job_titles j ON ej.job_title_id = j.job_title_id";
            
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(empQuery);

            // Print header with your name
            System.out.println("EMPLOYEE PAYROLL REPORT by [Your Name]\\n");

            // Create a Payroll object
            Payroll payroll = new Payroll();
            
            while (rs.next()) {
                int empId = rs.getInt("empid");
                String firstName = rs.getString("Fname");
                String lastName = rs.getString("Lname");
                String email = rs.getString("email");
                String jobTitle = rs.getString("job_title");
                
                System.out.println("Name= " + firstName + " " + lastName + 
                                  "\\tTitle=" + jobTitle + "\\t" + email);
                
                // Call the method in Payroll.java
                payroll.getPayByMonth(empId, conn);
                System.out.println();
            }
            
            // Wait for user input before clearing screen
            System.out.print("Press Enter to clear console screen...");
            new Scanner(System.in).nextLine();
            
            // Clear console (platform-dependent)
            if (System.getProperty("os.name").contains("Windows")) {
                new ProcessBuilder("cmd", "/c", "cls").inheritIO().start().waitFor();
            } else {
                System.out.print("\\033[H\\033[2J");
                System.out.flush();
            }
            
        } catch (SQLException e) {
            System.err.println("Database error: " + e.getMessage());
            e.printStackTrace();
        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
            e.printStackTrace();
        } finally {
            // Close the connection
            if (conn != null) {
                try {
                    conn.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}`}</code>
          </pre>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">Payroll.java:</h3>
        <div className="bg-muted p-4 rounded-lg my-4">
          <pre className="text-sm overflow-x-auto">
            <code>{`import java.sql.*;

public class Payroll {
    // Default empty constructor
    public Payroll() {
    }

    // Method to retrieve and display payroll records
    public void getPayByMonth(int empId, Connection conn) {
        String sql = "SELECT payID, pay_date, earnings, fed_tax, fed_med, fed_SS, " +
                    "state_tax, retire_401k, health_care " +
                    "FROM payroll WHERE empid = ?";
        
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setInt(1, empId);
            ResultSet rs = pstmt.executeQuery();

            // Print header for payroll data
            System.out.println("    EMP ID\\tPAY DATE\\tGROSS\\tFederal\\tFedMed\\tFedSS\\tState\\t401K\\tHealthCare");
            
            // Check if any payroll records exist
            boolean hasRecords = false;
            while (rs.next()) {
                hasRecords = true;
                int payId = rs.getInt("payID");
                Date payDate = rs.getDate("pay_date");
                double earnings = rs.getDouble("earnings");
                double fedTax = rs.getDouble("fed_tax");
                double fedMed = rs.getDouble("fed_med");
                double fedSS = rs.getDouble("fed_SS");
                double stateTax = rs.getDouble("state_tax");
                double retire401k = rs.getDouble("retire_401k");
                double healthCare = rs.getDouble("health_care");
                
                System.out.printf("    %d\\t%s\\t%.2f\\t%.2f\\t%.2f\\t%.2f\\t%.2f\\t%.2f\\t%.2f\\n",
                                 payId, payDate, earnings, fedTax, fedMed, fedSS, 
                                 stateTax, retire401k, healthCare);
            }
            
            if (!hasRecords) {
                System.out.println("    No payroll records found for this employee.");
            }
        } catch (SQLException e) {
            System.err.println("Error retrieving payroll data for employee ID " + empId);
            e.printStackTrace();
        }
    }
}`}</code>
          </pre>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg mt-6">
          <h3 className="text-lg font-semibold mb-2 text-yellow-800 dark:text-yellow-400">
            Case Sensitivity in Java Code
          </h3>
          <p className="text-muted-foreground">When writing your Java code, be aware of case sensitivity in:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
            <li>
              <strong>Database connection string:</strong> Use{" "}
              <code className="bg-muted px-1 py-0.5 rounded">jdbc:mysql://localhost:3306/employeedata</code>
              with lowercase database name.
            </li>
            <li>
              <strong>Column names:</strong> In the employees table, note that column names are{" "}
              <code className="bg-muted px-1 py-0.5 rounded">Fname</code> and
              <code className="bg-muted px-1 py-0.5 rounded">Lname</code> (with capital F and L), not{" "}
              <code className="bg-muted px-1 py-0.5 rounded">fname</code> or
              <code className="bg-muted px-1 py-0.5 rounded">firstName</code>.
            </li>
            <li>
              <strong>SQL queries:</strong> Ensure your column references in SQL queries match the exact case of the
              column names in the database.
            </li>
          </ul>
        </div>
      </section>

      <section id="compilation" className="scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">Compilation and Execution</h2>
        <p className="text-muted-foreground mb-4">
          Once your SQL scripts have been executed successfully and your Java code is ready, follow these steps to
          compile and run your program:
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Compilation</h3>
        <p className="text-muted-foreground mb-4">
          Open your terminal (or VS Code's integrated terminal) and navigate to your project directory:
        </p>

        <div className="bg-muted p-4 rounded-lg my-4">
          <p className="text-sm font-semibold mb-2">For Windows:</p>
          <pre className="text-sm overflow-x-auto">
            <code>{`cd "C:\\Users\\YourName\\Documents\\CSc3350 - Software Development"`}</code>
          </pre>

          <p className="text-sm font-semibold mb-2 mt-4">
            Compile both Java files with the MySQL Connector JAR in the classpath:
          </p>
          <pre className="text-sm overflow-x-auto">
            <code>{`javac -cp ".;mysql-connector-j-9.2.0.jar" GetEmployeesPayroll.java Payroll.java`}</code>
          </pre>

          <p className="text-sm font-semibold mb-2 mt-4">For macOS/Linux:</p>
          <pre className="text-sm overflow-x-auto">
            <code>{`javac -cp ".:mysql-connector-j-9.2.0.jar" GetEmployeesPayroll.java Payroll.java`}</code>
          </pre>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">Running the Program</h3>
        <div className="bg-muted p-4 rounded-lg my-4">
          <p className="text-sm font-semibold mb-2">For Windows:</p>
          <pre className="text-sm overflow-x-auto">
            <code>{`java -cp ".;mysql-connector-j-9.2.0.jar" GetEmployeesPayroll`}</code>
          </pre>

          <p className="text-sm font-semibold mb-2 mt-4">For macOS/Linux:</p>
          <pre className="text-sm overflow-x-auto">
            <code>{`java -cp ".:mysql-connector-j-9.2.0.jar" GetEmployeesPayroll`}</code>
          </pre>
        </div>
      </section>

      <section id="submission" className="scroll-mt-16">
        <h2 className="text-2xl font-bold mb-4">Submission Requirements</h2>
        <p className="text-muted-foreground mb-4">
          Ensure you submit the following files to the iCollege assignment portal:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>
            <strong>GetEmployeesPayroll.java</strong>
          </li>
          <li>
            <strong>Payroll.java</strong>
          </li>
          <li>
            <strong>A screenshot displaying the output</strong>, similar to the example provided. Ensure your name is
            included in the report title, formatted as: "EMPLOYEE PAYROLL REPORT by &lt;Your Name&gt;."
          </li>
        </ul>

        <p className="text-muted-foreground mt-4">
          Acceptable file types for submission include: .java, .pdf, .docx, .png, .jpeg, .webp.
        </p>
      </section>
    </div>
  )
}

