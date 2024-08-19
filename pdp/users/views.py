from django.contrib.auth import authenticate, login
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth import login
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .forms import UserRegistrationForm


def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user  = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('index')
        else:
            return HttpResponse('Invalid user credentials.')
    return render(request, 'login.html')


def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            # Extract cleaned data
            first_name = form.cleaned_data.get('first_name')
            last_name = form.cleaned_data.get('last_name')
            email_address = form.cleaned_data.get('email_address')
            ID_Number = form.cleaned_data.get('ID_Number')
            password = form.cleaned_data.get('password')

            # Create the user
            user = User.objects.create_user(
                username=email_address,  # Using email as username
                email=email_address,
                password=password,
                first_name=first_name,
                last_name=last_name
            )

            # Optionally log the user in after registration
            login(request, user)

            return redirect('login')  # Redirect to login page or another page
    else:
        form = UserRegistrationForm()

    return render(request, 'register.html', {'form': form})
