const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm_password');
        const passwordMessage = document.getElementById('password-message');
        const passwordMatch = document.getElementById('password-match');

        function checkPasswords()
        {
            if (password.value === confirmPassword.value)
            {
                passwordMessage.style.display = 'none';
                passwordMatch.style.display = 'block';
            } else
            {
                passwordMessage.style.display = 'block';
                passwordMatch.style.display = 'none';
            }
        }

        password.addEventListener('input', checkPasswords);
        confirmPassword.addEventListener('input', checkPasswords);
