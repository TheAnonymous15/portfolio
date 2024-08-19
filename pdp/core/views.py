from django.shortcuts import render


def index(request):
    return render(request, 'index.html')

def wabout(request):
    return render(request, "wabout.html")

def soon(request):
    return render(request, "soon.html")

def forfor(request):
    return render(request, "404.html")

def portforlio(request):
    return render(request, "portfolio.html")

def contact(request):
    return render(request, "contact")
