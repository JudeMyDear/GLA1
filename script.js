// script.js
// No specific content in the JavaScript file as per the requirement

const fullName = "Ka Wai Cheung"; 

document.addEventListener("DOMContentLoaded", function () {
    
    const h1Element = document.createElement('h1');
    h1Element.textContent = fullName;
    h1Element.style.textAlign = 'center';
    h1Element.style.color = '#A9A9A9';
    document.body.appendChild(h1Element);

    const input1 = document.createElement('input');
    const input2 = document.createElement('input');
    input1.type = 'text';
    input2.type = 'text';

    const validateButton = document.createElement('button');
    validateButton.textContent = 'Validate Input';

    const validationMessage = document.createElement('p');

    document.body.appendChild(input1);
    document.body.appendChild(input2);
    document.body.appendChild(validateButton);
    document.body.appendChild(validationMessage);

    const validateInput = (inputElement) => {
        try {
            const inputValue = parseFloat(inputElement.value);

            if (isNaN(inputValue)) {
                throw new Error('Please enter a valid number.');
            }

            inputElement.style.border = '';
            return inputValue;
        } catch (error) {
            validationMessage.textContent = error.message;
            inputElement.style.border = '2px solid red';
            return null;
        }
    };

    validateButton.addEventListener('click', function () {
        const validatedInput1 = validateInput(input1);
        const validatedInput2 = validateInput(input2);

        if (validatedInput1 !== null && validatedInput2 !== null) {
            validationMessage.textContent = `Validation successful: ${validatedInput1} and ${validatedInput2}`;
        }
    });

    const styleElement = document.createElement('style');
    styleElement.textContent = `
        body {
            background-color: #f5f5f5;
            font-family: 'Arial', sans-serif;
            margin: 20px;
        }

        input {
            padding: 8px;
            margin: 5px;
        }

        button {
            padding: 10px;
            margin: 5px;
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
        }
    `;

    document.head.appendChild(styleElement);
});
