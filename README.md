# Text Encryptor

## Overview

This project is a web-based tool for encrypting and decrypting text. It provides a simple interface for users to input text, encrypt it using specific character replacements, decrypt it back to the original text, and copy the encrypted text to the clipboard. The tool also provides visual feedback based on the input state, ensuring a user-friendly experience.

## Features

- **Text Encryption**: Replaces vowels with specific strings to create encrypted text.
- **Text Decryption**: Reverses the encryption process to restore the original text.
- **Copy to Clipboard**: Copies the encrypted text to the clipboard.
- **User Feedback**: Alerts the user if the input text is empty, toggles images based on the input state, and displays relevant messages.

## Usage

### Encryption

1. Enter the text you want to encrypt in the input field.
2. Click the "Encriptar" button.
3. The encrypted text will be displayed in the output area.

### Decryption

1. Enter the text you want to decrypt in the input field.
2. Click the "Desencriptar" button.
3. The decrypted text will be displayed in the output area.

### Copy to Clipboard

1. After encrypting the text, click the "Copiar" button.
2. The encrypted text will be copied to your clipboard.

## Project Structure
project-root/

├── assets/
│   ├── Logo Pequeno.png
│   ├── positive.png
│   └── negative.png
│
├── CSS/
│   ├── style.css
│   └── responsive.css
│
├── JS/
│   └── app.js
│
└── index.html

## Code Description

### HTML

The HTML file sets up the structure of the web page, including the input area for text, buttons for encryption and decryption, and sections for displaying the results and images.

### JavaScript (`app.js`)

The JavaScript file contains functions to handle text conversion, encryption, decryption, and copying to the clipboard.

- **`lowercase(input)`**: Converts input text to lowercase and removes accents and special characters.
- **`encryptText()`**: Encrypts the input text by replacing vowels with specific strings.
- **`decryptText()`**: Decrypts the input text by reversing the encryption process.
- **`copytext()`**: Copies the encrypted text to the clipboard.
- **`textAssignment(element, text)`**: Utility function to easily update text content in the HTML.

### CSS

The CSS files define the styling for the web page, including layout, colors, fonts, and responsiveness.

- **`style.css`**: Main styles for the project.
- **`responsive.css`**: Additional styles to ensure the page is responsive on different screen sizes.

## Installation and Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/text-encryptor.git
    ```

2. Navigate to the project directory:
    ```sh
    cd text-encryptor
    ```

3. Open `index.html` in your preferred web browser to use the tool.

## Contribution

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- [Iconify](https://iconify.design/) for the icon library.
- [Google Fonts](https://fonts.google.com/) for the fonts used in the project.
- [Vercel](https://vercel.com.com/) for deployd the project.
