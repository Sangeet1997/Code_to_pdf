# Code_to_pdf


This project is a simple web application that allows users to input a code snippet and a title, then generate a PDF document containing the formatted code. It uses HTML, CSS, and JavaScript, with the **pdfMake** library for PDF generation.

---

### File Structure

* `index.html`: The main HTML file containing the user interface.
* `script.js`: The JavaScript file that handles user interaction and PDF generation logic.
* `styles.css`: The CSS file for styling the application.

---

### How It Works

The application's core functionality is built around three buttons and a form. Users enter a problem title and their code into a form.

1.  **Add to PDF**: When a user clicks this button, the JavaScript code takes the title and the code input, formats them, and adds them to a data structure (`dd`) that will be used to create the PDF.
2.  **View PDF**: This button triggers the generation of a PDF from the `dd` data structure using the `pdfMake` library. The resulting PDF is then opened in a new browser tab.
3.  **Delete All Pages**: This button clears all the content that has been added to the `dd` data structure, effectively resetting the document so the user can start over.

The JavaScript file (`script.js`) uses event listeners to detect clicks on these buttons and execute the corresponding functions.

---

### Key Components

#### HTML (`index.html`)

The HTML file sets up the user interface with a form containing two input fields and three buttons.
* The **problem title** is a text input.
* The **code input** is a `<textarea>` element.
* The buttons are identified by their unique IDs: `add-to-pdf`, `view-pdf`, and `delete-all`.
* The page also includes links to the **pdfMake** library's JavaScript files via a Content Delivery Network (CDN), making it easy to use in the project.

#### JavaScript (`script.js`)

The JavaScript file manages the entire process.

* `dd`: This global object is a document definition model for **pdfMake**. It contains an empty `content` array where all the code snippets and titles will be stored before the PDF is generated. It also defines styles for `header` and `code` text, which helps format the final output.
* `hr()`: This helper function creates a horizontal rule to separate different sections in the PDF.
* `text_formatting()`: This function takes the `problem_title` and `code_lines` as arguments. It formats the title with a header style and adds the code, line by line. It also includes special formatting for comments (lines containing `#`) by coloring them gray. This function adds a page break before each new entry, ensuring each code snippet starts on a new page.
* **Event Listeners**:
    * The `add-to-pdf` listener calls `text_formatting` with the values from the form inputs. It then clears the input fields.
    * The `view-pdf` listener calls `pdfMake.createPdf(dd).open()`, which creates and displays the PDF.
    * The `delete-all` listener clears the `dd.content` array, resetting the document.