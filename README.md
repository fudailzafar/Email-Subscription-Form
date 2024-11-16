# Subscription Form to Google Sheet

A responsive **subscription form** that captures user email addresses and directly stores them in a Google Sheet using Google Apps Script. This project is ideal for collecting subscriber details during a website launch or maintenance period.

## 🌟 Features

- **Google Sheet Integration**: Emails are automatically saved to a Google Sheet for easy management.
- **User Feedback**: Displays a "Thank You" message upon successful submission.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Simple Configuration**: Easy-to-implement backend using Google Apps Script.

## 📂 File Structure

```bash
Subscription-Form/
│
├── index.html          # Main HTML file
├── style.css           # CSS file for styling the form and layout
├── script.js           # JavaScript file for form submission and feedback
└── images/             # Folder containing assets
    ├── background.png  # Background image for the hero section
    └── send-icon.png   # Icon for the submit button
```

## 🛠️ Technologies Used

- **HTML5**: For structuring the webpage.
- **CSS3**: For styling the form and layout.
- **JavaScript**: For form submission handling.
- **Google Apps Script**: For connecting the form to a Google Sheet.

## 🚀 How to Set Up

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/subscription-form.git
   ```
2. **Navigate to the Directory**:
   ```bash
   cd subscription-form
   ```
3. **Set Up Google Apps Script**:

   - Open Google Sheets and create a new spreadsheet.
   - Go to **Extensions** > **Apps Script**.
   - Paste the following script:
     ```javascript
     function doPost(e) {
       const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
       const row = [new Date(), e.parameter.Email];
       sheet.appendRow(row);
       return ContentService.createTextOutput("Success").setMimeType(
         ContentService.MimeType.TEXT
       );
     }
     ```
   - Deploy the script as a **web app** and allow permissions for "Anyone, even anonymous."
   - Copy the deployment URL and replace the `scriptURL` in `script.js`.

4. **Test the Form**:
   - Open `index.html` in your browser.
   - Enter an email and check if it appears in your Google Sheet.
