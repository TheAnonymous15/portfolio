from django.urls import path
from . import views as core_views  # Import core views with an alias
from users import views as users_views  # Import users views with an alias

urlpatterns = [
    path('', core_views.index, name="index"),
    path('wabout/', core_views.wabout, name="wabout"),
    path('404/', core_views.forfor, name='404'),
    path('soon/', core_views.soon, name='soon'),
    path('portfolio/', core_views.portforlio, name='portfolio'),
    path('register/', users_views.register, name='register'),
    path('contact/', core_views.contact, name='contact'),  # Added trailing slash for consistency
    # Added trailing slash for consistency
]
