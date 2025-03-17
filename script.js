// Contract address
const contractAddress = "https://odin.fun/token/2bay"; // O'zgarish: haqiqiy contract address ni shu yerga yozing

// Copy tugmasi
const copyButton = document.getElementById('copyBtn');

// Tugma bosilganda clipboard-ga nusxalash
copyButton.addEventListener('click', function() {
    // Temporary input element yaratish
    const tempInput = document.createElement('input');
    tempInput.value = contractAddress;
    document.body.appendChild(tempInput);
    
    // Copy qilish
    tempInput.select();
    document.execCommand('copy');
    
    // Tugma matnini "Copied" ga o'zgartirish
    copyButton.textContent = "CA has been copied!";

    copyButton.classList.add('copied');
    
    // "Copied" holatini qaytarish (2 soniya)
    setTimeout(function() {
        copyButton.textContent = "Copy Contract Address";
        
        // .copied sinfini olib tashlash, rangni qaytarish uchun
        copyButton.classList.remove('copied');
    }, 2000);
    
    // Temporary inputni o'chirish
    document.body.removeChild(tempInput);
});
