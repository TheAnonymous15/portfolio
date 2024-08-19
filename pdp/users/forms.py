from django import forms
from django.contrib.auth.models import User
from django.core.validators import RegexValidator
from django.core.exceptions import ValidationError

class UserRegistrationForm(forms.ModelForm):
    first_name = forms.CharField(
        max_length=50,
        required=True,
        widget=forms.TextInput(attrs={'placeholder': 'First name'})
    )
    last_name = forms.CharField(
        max_length=50,
        required=True,
        widget=forms.TextInput(attrs={'placeholder': 'Last name'})
    )
    email_address = forms.EmailField(
        max_length=50,
        required=True,
        widget=forms.EmailInput(attrs={'placeholder': 'Email address'})
    )
    ID_Number = forms.IntegerField(
        required=True,
        validators=[RegexValidator(r'^\d+$', 'Enter a valid ID number')],
        widget=forms.NumberInput(attrs={'placeholder': 'ID number'})
    )
    password = forms.CharField(
        required=True,
        widget=forms.PasswordInput(attrs={'placeholder': 'Password'})
    )
    confirm_password = forms.CharField(
        required=True,
        widget=forms.PasswordInput(attrs={'placeholder': 'Confirm password'})
    )

    class Meta:
        model = User
        fields = ["first_name", "last_name", "email_address", "ID_Number", "password"]

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get("password")
        confirm_password = cleaned_data.get("confirm_password")

        if password and confirm_password and password != confirm_password:
            self.add_error("confirm_password", "Passwords don't match")

        return cleaned_data
