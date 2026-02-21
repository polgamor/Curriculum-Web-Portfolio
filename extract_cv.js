const fs = require('fs');
const pdf = require('pdf-parse');

async function extractCVData() {
    try {
        console.log('Extracting Spanish CV...');
        const spanishBuffer = fs.readFileSync('./CV_Pol_García_Moreno.pdf');
        const spanishData = await pdf(spanishBuffer);
        
        console.log('=== SPANISH CV CONTENT ===');
        console.log(spanishData.text);
        console.log('\n' + '='*80 + '\n');
        
        console.log('Extracting English CV...');
        const englishBuffer = fs.readFileSync('./CV_Pol_García_Moreno_English.pdf');
        const englishData = await pdf(englishBuffer);
        
        console.log('=== ENGLISH CV CONTENT ===');
        console.log(englishData.text);
        
        // Save both to files for further processing
        fs.writeFileSync('./spanish_cv_extracted.txt', spanishData.text);
        fs.writeFileSync('./english_cv_extracted.txt', englishData.text);
        
        console.log('\nBoth CVs have been extracted and saved to text files.');
        
    } catch (error) {
        console.error('Error extracting PDFs:', error);
    }
}

extractCVData();