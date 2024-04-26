

    function generatePDF() {
        // Select the form element
        var formElement = document.querySelector('form');

        // Convert the form content to PDF
        html2pdf(formElement, {
            margin: 0.5,
            filename: 'report.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { dpi: 192, letterRendering: true },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        });
    }